(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/60-SELECTORS.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var s=a("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(a("../../node_modules/react/index.js"),a("../../node_modules/@mdx-js/react/dist/esm.js")),n={},r="wrapper";function o(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)(r,Object.assign({},n,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"selectors"},"Selectors"),Object(c.b)("h2",{id:"retrieving-resource-objects-from-the-store"},"Retrieving resource objects from the store"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { getResourceObject, getResourceObjects } from 'jason-api';\n\n// Get single article\nconst article = getResourceObject<ArticleResource>(state, 'article', articleId);\n\n// Get all articles\nconst articles = getResourceObjects<ArticleResource>(state, 'articles');\n\n// Get array of articles\nconst articles = getResourceObjects<ArticleResource>(\n    state,\n    'articles',\n    [id1, id2, id3]\n);\n")),Object(c.b)("h2",{id:"metadata"},"Metadata"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { getResourceObjectsMeta, getResourceObjectMeta } from 'jason-api';\n\n// Get all metadata for an resource object type\nconst metadata = getResourceObjectsMeta(state, 'articles');\n\n// Get a specific metadata value for an resource object type\nconst isLoading = getResourceObjectsMeta(\n    state,\n    'articles',\n    'isLoading'\n);\n\n// Get all metadata for a specific resource object\nconst metadata = getResourceObjectMeta(\n    state,\n    'articles',\n    '123'\n);\n\n// Get a specific metadata value for a specific resource object\nconst isLoading = getResourceObjectMeta(\n    state,\n    'articles',\n    '123',\n    'isLoading'\n);\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/60-SELECTORS.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-60-selectors.dec2b17f8fb729baaf3a.js.map