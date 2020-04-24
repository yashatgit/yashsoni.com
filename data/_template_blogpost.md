import Date from '../../components/date'
import Post from '../../components/post'
import ImageGrid from '../../components/imageGrid'
import articles from '../../data/blog_data'

export const meta = {
date: '2017-07-15',
description: 'Visualize my journey through the scenic lands of Norway with rich, stunning pictures and daily travel logs.',
image: '/static/images/10-days-in-norway/banner.png',
slug: '10-days-in-norway',
title: '10 Days in Norway'
}

export default ({children}) => <Post meta={meta}>{children}</Post>

# 10 Days in Norway

<Date>{meta.date}</Date>

![Norway](/static/images/10-days-in-norway/banner.png)
[![XKCD](https://imgs.xkcd.com/comics/git_commit.png)](https://xkcd.com/1296/)

<ImageGrid
images={[
'https://cdn-images-1.medium.com/max/2000/1*pB38gxz_TRCwzyHSFUv7WQ@2x.jpeg',
'https://cdn-images-1.medium.com/max/2000/1*VdpaanOHJIiCAqVgTH5RRg@2x.jpeg',
'https://cdn-images-1.medium.com/max/2000/1*GxOPKy1ZvXylH7IQzRTJGw@2x.jpeg'
]}
height="2"
width="1"
caption="Activity, calorie burn and sleep analysis on the Fitbit app."
/>

## =======================================

```bash
$ git clone https://github.com/yashsoni.com/yashsoni.com.git
$ cd yashsoni.com
$ yarn
$ yarn dev
```

```html
<div class="meta">Friday, March 9, 2018 at 11:53pm UTC+11</div>
<div class="comment">Some post, comment, song, or link shared</div>
```

```js
import fetch from 'isomorphic-unfetch';

export default async function(...args) {
    const res = await fetch(...args);

    return res.json();
}
```

`data` will contain the JSON response from our API route.

```json
// /api/unsplash

{
    "downloads": 7995,
    "views": 1134429
}
```

```python
venue_list = []
try:
	data = make_request(url)
for item in data['response']['groups'][0]['items']:
	venue = item['venue']
	venue_list.append(Business(
		venue['name'],
		venue['location']['address'],
		venue['rating'],
		venue['ratingSignals'],
		venue['stats']['checkinsCount']))
except Exception, e:
	print e
```

```css
@keyframes color {
    0% {
        fill: #99002f;
    }
    50% {
        fill: #ffc426;
    }
    100% {
        fill: #99002f;
    }
}
```

```YAML
---
title: Migrating to Hugo
description: Why I chose this static site generator and the benefits you can receive.
date: 2017-09-29
images: ["http://www.leejamesrobinson.com/static/images/migrating-to-hugo/hugo.png"]
categories:
  - code
---
```
