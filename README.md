# html-file-generator
This is a simple HTML file creator, it is aimed to provide ease in creating html contents i.e tags and can help us in pushing these elements in the HTML file.

## Usage examples
Following are some use case examples :
### Import Dependency 
    const htmlFileGenerator = require('html-file-generator');
### Create any HTML Tag
    htmlFileGenerator.createElement('span','This is HTML Tag')
### Add Attributes to a HTML element
    htmlFileGenerator.createElement('a','This is Link',{'href':'#'})
### Create Self Closing HTML Tags
    htmlFileGenerator.createSelfClosingElement('hr')
### Create HTML headings
    htmlFileGenerator.createElement('h1', "This is Heading 1")
    htmlFileGenerator.createElement('h2', "This is Heading 2")
    htmlFileGenerator.createElement('h3', "This is Heading 3")
### Create Paragraph
    htmlFileGenerator.createElement('p', "This is paragraph content")
### Create HTML Tables
    htmlFileGenerator.createTable(["S.No","Student Name","Marks"], [["1","Jack Bauer", "90"],["2","Micheal Dessler", "80"]])
HTML tables take first argument as a table header which is an array and second argument as table body which is a 2D array
### Create Lists 
    htmlFileGenerator.createList('ol',["List Item 1", "List Item 2"])
It can generate only `ol and ul` lists 
### Create HTML file Content 
    var elements = [];
    elements.push(htmlFileGenerator.createElement('h1', "Main Heading"));
    elements.push(htmlFileGenerator.createSelfClosingElement("hr"));
    elements.push(htmlFileGenerator.createElement('h2', "Sub Heading"));
    htmlFileGenerator.createTable(["S.No","Student Name","Marks"], [["1","Jack Bauer", "90"],["2","Micheal Dessler", "80"]])
    elements.push(htmlFileGenerator.createSelfClosingElement("hr"));
    const htmlFileContent = htmlFileGenerator.creatHTMLFile("HTML File Title", getStyles() , elements);
    console.log("This is generated HTML File", htmlFileContent );

    function getStyles() {
        return `* {
            font-family: Segoe UI,Helvetica,Arial,sans-serif; 
        } 
        body {
            padding : 30px;
        }
        hr {
            background-color: #dddddd;
        }
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #eaecef;
        }`;
    }

