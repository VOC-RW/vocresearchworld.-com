# VOC Research World V6.1 — Content Architecture

V6.1 introduces a backend-ready scholarly content model without requiring a backend yet.

## Core relationships

- Author → Articles
- Author → Research Projects
- Article → Author
- Article → Research Project
- Article → References
- Article → Related Articles
- Research Project → Team / Lead Author
- Research Project → Articles
- Research Project → Publications
- Publication → Authors / Article / Project

## Current data layer

`data.js` contains the temporary static data layer. A future CMS/database can replace this file while keeping the page templates and URL structure.

## Important principle

The site distinguishes educational/research notes from formal peer-reviewed publication claims. Do not label material as peer-reviewed unless an actual review process has occurred.
