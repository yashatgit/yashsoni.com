import { describe, it, expect } from "vitest";
import { compileMDX } from "next-mdx-remote/rsc";
import ReactDOMServer from "react-dom/server";

/**
 * Tests that MDX rendering correctly passes JSX expression props to components.
 *
 * Background: next-mdx-remote v6 introduced a `removeJavaScriptExpressions`
 * plugin (blockJS=true by default) that strips JSX attribute expressions like
 * photos={[...]} from MDX content. Since our MDX is authored locally (not
 * user-generated), we disable blockJS. These tests ensure that regression
 * doesn't happen again.
 */

async function renderMDX(
  source: string,
  components: Record<string, unknown>,
  options: Record<string, unknown> = {}
) {
  const { content } = await compileMDX({
    source,
    components,
    options,
  });
  // Actually render the React tree to trigger component calls
  ReactDOMServer.renderToString(content);
}

function createTestComponent(name: string) {
  const calls: Array<Record<string, unknown>> = [];
  const Component = (props: Record<string, unknown>) => {
    calls.push(props);
    return null;
  };
  Component.displayName = name;
  return { Component, calls };
}

describe("MDX rendering with blockJS: false", () => {
  it("passes array props to custom components", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `<MediaGrid photos={[{src: '/test.jpg', width: 100, height: 100}]}/>`,
      { MediaGrid },
      { blockJS: false }
    );

    expect(calls.length).toBe(1);
    expect(calls[0].photos).toBeDefined();
    expect(Array.isArray(calls[0].photos)).toBe(true);
    expect((calls[0].photos as Array<Record<string, unknown>>)[0].src).toBe("/test.jpg");
  });

  it("passes multiple array items in props", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `<MediaGrid photos={[
        {src: '/a.jpg', width: 100, height: 100},
        {src: '/b.jpg', width: 200, height: 200}
      ]}/>`,
      { MediaGrid },
      { blockJS: false }
    );

    expect(calls.length).toBe(1);
    const photos = calls[0].photos as Array<Record<string, unknown>>;
    expect(photos).toHaveLength(2);
    expect(photos[0].src).toBe("/a.jpg");
    expect(photos[1].src).toBe("/b.jpg");
  });

  it("passes string props alongside expression props", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `<MediaGrid caption="My caption" photos={[{src: '/test.jpg', width: 100, height: 100}]}/>`,
      { MediaGrid },
      { blockJS: false }
    );

    expect(calls.length).toBe(1);
    expect(calls[0].caption).toBe("My caption");
    expect(calls[0].photos).toBeDefined();
  });

  it("passes object props with nested values", async () => {
    const { Component: TestComp, calls } = createTestComponent("TestComp");

    await renderMDX(
      `<TestComp data={{key: 'value', nested: {a: 1}}}/>`,
      { TestComp },
      { blockJS: false }
    );

    expect(calls.length).toBe(1);
    const data = calls[0].data as Record<string, unknown>;
    expect(data.key).toBe("value");
    expect((data.nested as Record<string, unknown>).a).toBe(1);
  });

  it("renders multiple components with expression props in same document", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `
# Title

Some text.

<MediaGrid photos={[{src: '/a.jpg', width: 100, height: 100}]}/>

More text.

<MediaGrid photos={[{src: '/b.jpg', width: 200, height: 200}]} caption="Second grid"/>
`,
      { MediaGrid },
      { blockJS: false }
    );

    expect(calls.length).toBe(2);
    expect((calls[0].photos as Array<Record<string, unknown>>)[0].src).toBe("/a.jpg");
    expect((calls[1].photos as Array<Record<string, unknown>>)[0].src).toBe("/b.jpg");
    expect(calls[1].caption).toBe("Second grid");
  });
});

describe("MDX rendering with blockJS: true (default) strips expression props", () => {
  it("strips array expression props when blockJS is true", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `<MediaGrid photos={[{src: '/test.jpg', width: 100, height: 100}]}/>`,
      { MediaGrid }
      // no options — blockJS defaults to true
    );

    expect(calls.length).toBe(1);
    // With blockJS: true, the photos prop is stripped
    expect(calls[0].photos).toBeUndefined();
  });

  it("preserves string literal props even with blockJS: true", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `<MediaGrid caption="My caption" photos={[{src: '/test.jpg', width: 100, height: 100}]}/>`,
      { MediaGrid }
    );

    expect(calls.length).toBe(1);
    // String literal props survive blockJS
    expect(calls[0].caption).toBe("My caption");
    // Expression props are stripped
    expect(calls[0].photos).toBeUndefined();
  });
});

describe("MDX rendering preserves markdown features", () => {
  it("renders inline markdown alongside custom components", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `
This has **bold** and *italic* text.

<MediaGrid photos={[{src: '/test.jpg', width: 100, height: 100}]}/>

More **bold** text after component.
`,
      { MediaGrid },
      { blockJS: false }
    );

    expect(calls.length).toBe(1);
    expect(calls[0].photos).toBeDefined();
  });

  it("handles frontmatter content without interference", async () => {
    const { Component: MediaGrid, calls } = createTestComponent("MediaGrid");

    await renderMDX(
      `---
title: Test Post
date: '2023-01-01'
---

<MediaGrid photos={[{src: '/test.jpg', width: 100, height: 100}]}/>
`,
      { MediaGrid },
      { parseFrontmatter: true, blockJS: false }
    );

    expect(calls.length).toBe(1);
    expect(calls[0].photos).toBeDefined();
  });
});
