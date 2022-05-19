import { Fragment } from 'react'
import showdown from 'showdown'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const HtmlContent = ({ content = "" }) => {
    const converter = new showdown.Converter()
    const htmlContent = converter.makeHtml(content)
    return (
        <Fragment>
            {ReactHtmlParser(htmlContent)}
        </Fragment>
    )
}

export default HtmlContent