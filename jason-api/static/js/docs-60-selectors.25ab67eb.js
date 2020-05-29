(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/60-SELECTORS.mdx":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return r}));var s=c("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(c("../../node_modules/react/index.js"),c("../../node_modules/@mdx-js/react/dist/esm.js")),n={};function r(e){var t=e.components,c=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object.assign({},n,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"selectors"},"Selectors"),Object(a.b)("h2",{id:"retrieving-resource-objects-from-the-store"},"Retrieving resource objects from the store"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { getResourceObject, getResourceObjects } from 'jason-api';\n\n// Get single article\nconst article = getResourceObject<ArticleResource>(state, 'article', articleId);\n\n// Get all articles\nconst articles = getResourceObjects<ArticleResource>(state, 'articles');\n\n// Get array of articles\nconst articles = getResourceObjects<ArticleResource>(\n    state,\n    'articles',\n    [id1, id2, id3]\n);\n")),Object(a.b)("h2",{id:"metadata"},"Metadata"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { getResourceObjectsMeta, getResourceObjectMeta } from 'jason-api';\n\n// Get all metadata for an resource object type\nconst metadata = getResourceObjectsMeta(state, 'articles');\n\n// Get a specific metadata value for an resource object type\nconst isLoading = getResourceObjectsMeta(\n    state,\n    'articles',\n    'isLoading'\n);\n\n// Get all metadata for a specific resource object\nconst metadata = getResourceObjectMeta(\n    state,\n    'articles',\n    '123'\n);\n\n// Get a specific metadata value for a specific resource object\nconst isLoading = getResourceObjectMeta(\n    state,\n    'articles',\n    '123',\n    'isLoading'\n);\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/60-SELECTORS.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-60-selectors.8116fbd6393323411e06.js.map