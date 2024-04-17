function markdownTableToReactComponent(markdown) {
  // Split the markdown input into lines
  const lines = markdown.split("\n").filter((line) => line.trim() !== "");

  // Extract headers from the first line
  // Remove the pipe characters and trim the content, split by "|"
  const headers = lines[0]
    .split("|")
    .filter((header) => header.trim() !== "")
    .map((header) => header.trim());

  // Extract rows from the remaining lines
  const rows = lines.slice(2).map((line) => {
    return line
      .split("|")
      .filter((cell) => cell.trim() !== "")
      .map((cell) => cell.trim());
  });

  // Create the data object for the Table component
  const tableData = {
    headers,
    rows,
  };

  return `<Table
      data={${JSON.stringify(tableData)}}
    />`;
}

console.log(
  markdownTableToReactComponent(`
| **semver range** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **verbose ex.** &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **description**                                                                                                                                                                                                          |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "*"                                                                      | ">=0.0.0"                                                               |                                                                                                                 |
| "1.2.3 - 2.3.4"                                                          | ">=1.2.3 <=2.3.4"                                                       | use the most recent version greater than or equal 1.2.3 and less than or equal to 2.3.4 found in the repository                                                                                                          |
| "1.2.3 - 2"                                                              | ">=1.2.3 <3.0.0"                                                        | use the most recent version greater than or equal to 1.2.3 and less than 3.0.0 found in the repository                                                                                                                   |
| "1.*"                                                                    | ">=1.0.0 <2.0.0"                                                        | use the most recent version greater than or equal to 1.0.0 and less than 2.0.0 in the repository (i.e. get any major version change greater than or equal to 1.0.0 and less than 2.0.0)                                  |
| "1.2.*"                                                                  | ">=1.2.0 <1.3.0"                                                        | use the most recent version greater than or equal to 1.2.0 and less than 1.3.0 in the repository (i.e. get any major and minor version change greater than or equal to 1.2.0 and less than 1.3.0)                        |
| "~1.2.3"                                                                 | ">=1.2.3 <1.3.0"                                                        | use the most recent version greater than or equal to 1.2.3 and less than 1.3.0 in the repository (i.e. Allows patch-level changes if a minor version is specified on the comparator. Allows minor-level changes if not.) |
| "^1.2.3"                                                                 | ">=1.2.3 <2.0.0"  
`)
);
