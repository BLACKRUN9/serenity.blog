import { PortableText } from "@portabletext/react";

import articelPortableText from './PortableComponent'
const ArticleContent = ({ ARTICLE_CONTENT }) => {
  const body = ARTICLE_CONTENT;
  return (
    <div className=''>
      <div className="dark:text-gray-100 ">
        <PortableText value={body} components={articelPortableText} /></div>


    </div>
  );
};

export default ArticleContent;
