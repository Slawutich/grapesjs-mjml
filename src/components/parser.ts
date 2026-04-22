import mjml2html from 'mjml-browser';
import mjml from "mjml-core";

/**
 * MJML Parser.
 * 
 * @see {@link https://github.com/mjmlio/mjml/tree/master/packages/mjml-core}
 */
export type MjmlParser = typeof mjml;

export type MjmlParserResult = ReturnType<MjmlParser>;
export type MjmlParserOutput = Awaited<MjmlParserResult>;

/**
 * MJML Parser instance.
 */
export default mjml2html as MjmlParser;
