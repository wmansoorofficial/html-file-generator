const createHTML = require('create-html');
const parse = require('node-html-parser').parse;
const _ = require('lodash');

/**
 * Creates Basic HTML skeleton
 * 
 * @param {file Title} htmlFileTitle 
 */
function createHTMLFileSkeleton(htmlFileTitle = "Default Title") {
    var html = createHTML({
        title: htmlFileTitle
    });
    return html;
}

/**
 * Creates HTML elements not valid for self closing tags
 * 
 * @param {HTML tag} tagName 
 * @param {HTML tag content} innerHtml
 * @param {HTML tag attributes} attributes 
 */
function createElement(tagName, innerHtml = "", attributes = []) {
    var attrString = []
    if (!_.isEmpty(attributes)) {
        Object.entries(attributes).forEach(([key, value]) => {
            attrString.push(`${key} = "${value}"`)
        });
    }
    return `<${tagName} ${attrString.join() }>${innerHtml}</${tagName}>`;
}

/**
 * 
 * @param {Self Closing Tag Name} tagName 
 */
function createSelfClosingElement(tagName) {
    return `<${tagName} />`;
}

/**
 * Creates HTML based table
 * @param {Table Header row must be passed as array} tHead 
 * @param {Table Body rows must be pass as 2D array} tBody 
 */
function createTable(tHead = [], tBody = []) {
    var table = createElement('table');
    if (!_.isEmpty(tHead)) {
        var tableRow = parse(createElement('tr')).querySelector('tr');
        tHead.forEach(function (el) {
            var tableHead = createElement('th', el);
            tableRow.appendChild(tableHead);
        });
        table = appendTableRow(table, tableRow);
    }
    if (!_.isEmpty(tBody)) {
        tBody.forEach(function (tb) {
            var tableRow = parse(createElement('tr')).querySelector('tr');
            tb.forEach(function (el) {
                var tableBody = createElement('td', el);
                tableRow.appendChild(tableBody);
            });
            table = appendTableRow(table, tableRow);
        });
    }
    return table;
}

// Helping function for HTML table
function appendTableRow(table, tableRow) {
    table = parse(table);
    table.querySelector('table').appendChild(tableRow.toString());
    return table.toString();
}

/**
 * Creates HTML list
 * 
 * @param {HTML list types e.g ul, ol etc} listType 
 * @param {List Items must be passed as array} items 
 */
function createList(listType = 'ul', items = []) {
    var list = parse(createElement(listType)).querySelector(listType);
    items.forEach(function (it) {
        var listItem = createElement("li", it);
        list.appendChild(listItem);
    });
    return list.toString();
}

/**
 * Creates HTML Based Report Contents
 * @param {HTML Report Title} title 
 * @param {CSS styles} styles 
 * @param {HTML report element i.e HTML tags} reportElements 
 */
function creatHTMLFile(title, styles = [], reportElements = []) {
    var root = parse(createHTMLFileSkeleton(title));
    var head = root.querySelector('head');
    head.appendChild(styles);
    var body = root.querySelector('body');

    reportElements.forEach(function (el) {
        body.appendChild(el);
    });
    return root.toString();
}

module.exports = {
    createElement,
    createSelfClosingElement,
    createTable,
    createList,
    creatHTMLFile
};
