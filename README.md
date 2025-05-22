# Checklists

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/piwind/flarum-checklist.svg)](https://packagist.org/packages/piwind/flarum-checklist)

A [Flarum](http://flarum.org) extension. Checklists for Flarum! If you can edit posts with checklists, you can click them to toggle without having to open the edit composer.
Integrates particularly well with [Flarum Rich Text Editor](https://discuss.flarum.org/d/26455-wysiwyg-rich-text-editor) but does not require it.

![Screenshot](https://i.imgur.com/y2XFZhA.png)

## Syntax

```
- [ ] unchecked
- [x] checked
  - [ ] Works nested

---

1. [ ] Works with ordered lists
```

## About This Fork

This repository is a fork of [askvortsov1/flarum-checklist](https://github.com/askvortsov1/flarum-checklist), with some bugfix.

### TODO

- **BUG：**子清单不论是否checked，都会因为其父级checked而被添加删除线样式

## Installation & Updating

Install with composer:

```sh
composer require piwind/flarum-checklist:*
```

Updating:

```sh
composer update piwind/flarum-checklist
```

### Links

- [Packagist](https://packagist.org/packages/piwind/flarum-checklist)
- [Github](https://github.com/piwind/flarum-checklist)

