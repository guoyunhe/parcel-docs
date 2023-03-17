# parcel-docs

Static document website generator powered by Parcel.

```bash
npm i -D parcel parcel-docs react react-dom @mdx-js/react
```

```json
// package.json
{
  "scripts": {
    "start": "parcel-docs",
    "build": "parcel build && parcel-docs build",
    "watch": "parcel watch"
  }
}
```

You can use parcel-docs with zero-configuration. However, you are allowed to configure quite a lot things.

```json
// .parceldocsrc
{
  "docs": {
    "title": "Foobar", // if not specified, use "name" from "package.json"
    "description": "Foobar is foobar",
    "copyright": {
      "year": "2020-2023", // current year by default
      "owner": "Guo Yunhe"
    },
    "github": "", // not necessary if you have specified GitHub repo in package.json
    // if pages are not specified, all *.md files will be scanned and included in a flat structure
    "pages": [
      {
        "path": "/",
        "title": "Home",
        "component": "README.md"
      },
      {
        "path": "components",
        "title": "Components", // a group, not clickable
        "children": [
          {
            "path": "button",
            "title": "Button",
            "component": "src/components/button/index.md"
          }
        ]
      }
    ]
  }
}
```
