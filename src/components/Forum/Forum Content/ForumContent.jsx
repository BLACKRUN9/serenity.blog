import { PortableText } from "@portabletext/react";

import forumPortableText from './PortableComponent'
const ForumContent = ({ FORUM_CONTENT }) => {
  const body = FORUM_CONTENT;
  return (
    <>
      <div className="dark:text-gray-300">
        <PortableText value={body} components={forumPortableText} /></div>


    </>
  );
};

export default ForumContent;
