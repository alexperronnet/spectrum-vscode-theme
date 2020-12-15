// See https://github.com/Microsoft/vscode-docs/blob/master/api/references/theme-color.md for mor informations.

const colors = require("tailwindcss/colors")

module.exports = {
  name: "Spectrum Theme",
  type: "dark",
  colors: {
    focusBorder: colors.blue[700],
    foreground: colors.gray[400],
    descriptionForeground: colors.gray[500],
    errorForeground: colors.pink[400],
    "textLink.foreground": colors.blue[400],
    "textLink.activeForeground": colors.blue[300],
    "textBlockQuote.background": colors.black,
    "textBlockQuote.border": colors.gray[800],
    "textCodeBlock.background": colors.gray[900],
    "textPreformat.foreground": colors.gray[400],
    "textSeparator.foreground": colors.gray[700],
    "button.background": colors.emerald[800],
    "button.foreground": colors.emerald[200],
    "button.hoverBackground": colors.emerald[700],
    "checkbox.background": colors.gray[800],
    "checkbox.border": colors.gray[900],
    "dropdown.background": colors.gray[900],
    "dropdown.border": colors.gray[900],
    "dropdown.foreground": colors.gray[300],
    "dropdown.listBackground": colors.black,
    "input.background": colors.gray[900],
    "input.border": colors.gray[900],
    "input.foreground": colors.gray[300],
    "input.placeholderForeground": colors.gray[500],
    "badge.foreground": colors.blue[300],
    "badge.background": colors.blue[800],
    "progressBar.background": colors.blue[600],
    "titleBar.activeForeground": colors.gray[300],
    "titleBar.activeBackground": colors.black,
    "titleBar.inactiveForeground": colors.gray[500],
    "titleBar.inactiveBackground": colors.black,
    "titleBar.border": colors.gray[900],
    "activityBar.foreground": colors.gray[300],
    "activityBar.inactiveForeground": colors.gray[600],
    "activityBar.background": colors.black,
    "activityBarBadge.foreground": colors.gray[100],
    "activityBarBadge.background": colors.blue[600],
    "activityBar.activeBorder": colors.emerald[500],
    "activityBar.border": colors.gray[900],
    "sideBar.foreground": colors.gray[400],
    "sideBar.background": colors.black,
    "sideBar.border": colors.gray[900],
    "sideBarTitle.foreground": colors.gray[300],
    "sideBarSectionHeader.foreground": colors.gray[300],
    "sideBarSectionHeader.background": colors.black,
    "sideBarSectionHeader.border": colors.gray[900],
    "list.hoverForeground": colors.gray[300],
    "list.inactiveSelectionForeground": colors.gray[300],
    "list.activeSelectionForeground": colors.gray[300],
    "list.hoverBackground": colors.gray[900],
    "list.inactiveSelectionBackground": colors.gray[900],
    "list.activeSelectionBackground": colors.gray[800],
    "list.inactiveFocusBackground": colors.trueGray[800],
    "list.focusBackground": colors.blue[800],
    "tree.indentGuidesStroke": colors.gray[900],
    "notificationCenterHeader.foreground": colors.gray[500],
    "notificationCenterHeader.background": colors.black,
    "notifications.foreground": colors.gray[300],
    "notifications.background": colors.gray[900],
    "notifications.border": colors.gray[900],
    "notificationsErrorIcon.foreground": colors.pink[500],
    "notificationsWarningIcon.foreground": colors.amber[400],
    "notificationsInfoIcon.foreground": colors.blue[400],
    "pickerGroup.border": colors.gray[800],
    "pickerGroup.foreground": colors.gray[300],
    "quickInput.background": colors.black,
    "quickInput.foreground": colors.gray[300],
    "statusBar.foreground": colors.gray[400],
    "statusBar.background": colors.black,
    "statusBar.border": colors.gray[900],
    "statusBar.noFolderBackground": colors.black,
    "statusBar.debuggingBackground": colors.pink[900],
    "statusBar.debuggingForeground": colors.gray[100],
    "statusBarItem.prominentBackground": colors.gray[900],
    "editorGroupHeader.tabsBackground": colors.black,
    "editorGroupHeader.tabsBorder": colors.gray[900],
    "editorGroup.border": colors.gray[900],
    "tab.activeForeground": colors.gray[300],
    "tab.inactiveForeground": colors.gray[500],
    "tab.inactiveBackground": colors.black,
    "tab.activeBackground": colors.black,
    "tab.hoverBackground": colors.black,
    "tab.unfocusedHoverBackground": colors.black,
    "tab.border": colors.gray[900],
    "tab.unfocusedActiveBorderTop": colors.gray[900],
    "tab.activeBorder": colors.black,
    "tab.unfocusedActiveBorder": colors.black,
    "tab.activeBorderTop": colors.emerald[500],
    "breadcrumb.foreground": colors.gray[500],
    "breadcrumb.focusForeground": colors.gray[300],
    "breadcrumb.activeSelectionForeground": colors.gray[400],
    "breadcrumbPicker.background": colors.gray[900],
    "editor.foreground": colors.gray[300],
    "editor.background": colors.black,
    "editorWidget.background": colors.black,
    "editor.foldBackground": colors.gray[900],
    "editor.lineHighlightBackground": colors.gray[900],
    "editorLineNumber.foreground": colors.gray[800],
    "editorLineNumber.activeForeground": colors.gray[300],
    "editorIndentGuide.background": colors.gray[900],
    "editorIndentGuide.activeBackground": colors.gray[800],
    "editorWhitespace.foreground": colors.gray[800],
    "editorCursor.foreground": colors.blue[300],
    "editor.findMatchBackground": `${colors.yellow[500]}44`,
    "editor.findMatchHighlightBackground": `${colors.yellow[500]}22`,
    "editor.inactiveSelectionBackground": `${colors.blue[500]}22`,
    "editor.selectionBackground": `${colors.blue[500]}44`,
    "editor.selectionHighlightBackground": `${colors.emerald[300]}33`,
    "editor.selectionHighlightBorder": `${colors.emerald[300]}00`,
    "editor.wordHighlightBackground": `${colors.emerald[300]}00`,
    "editor.wordHighlightStrongBackground": `${colors.emerald[300]}00`,
    "editor.wordHighlightBorder": `${colors.emerald[300]}99`,
    "editor.wordHighlightStrongBorder": `${colors.emerald[300]}66`,
    "editorBracketMatch.background": `${colors.emerald[300]}50`,
    "editorBracketMatch.border": `${colors.emerald[300]}00`,
    "editorGutter.modifiedBackground": colors.blue[500],
    "editorGutter.addedBackground": colors.emerald[600],
    "editorGutter.deletedBackground": colors.pink[500],
    "diffEditor.insertedTextBackground": `${colors.emerald[600]}30`,
    "diffEditor.removedTextBackground": `${colors.pink[600]}30`,
    "scrollbar.shadow": colors.gray[900],
    "scrollbarSlider.background": `${colors.gray[600]}33`,
    "scrollbarSlider.hoverBackground": `${colors.gray[600]}44`,
    "scrollbarSlider.activeBackground": `${colors.gray[600]}88`,
    "editorOverviewRuler.border": colors.gray[900],
    "panel.background": colors.black,
    "panel.border": colors.gray[900],
    "panelTitle.activeBorder": colors.emerald[500],
    "panelTitle.activeForeground": colors.gray[300],
    "panelTitle.inactiveForeground": colors.gray[500],
    "panelInput.border": colors.gray[900],
    "terminal.foreground": colors.gray[400],
    "gitDecoration.addedResourceForeground": colors.emerald[500],
    "gitDecoration.modifiedResourceForeground": colors.blue[400],
    "gitDecoration.deletedResourceForeground": colors.pink[500],
    "gitDecoration.untrackedResourceForeground": colors.emerald[500],
    "gitDecoration.ignoredResourceForeground": colors.gray[600],
    "gitDecoration.conflictingResourceForeground": colors.amber[400],
    "gitDecoration.submoduleResourceForeground": colors.gray[600],
    "debugToolBar.background": colors.gray[900],
    "editor.stackFrameHighlightBackground": colors.gray[900],
    "editor.focusedStackFrameHighlightBackground": colors.gray[800],
    "peekViewEditor.matchHighlightBackground": `${colors.yellow[500]}33`,
    "peekViewResult.matchHighlightBackground": `${colors.yellow[500]}33`,
    "peekViewEditor.background": `${colors.gray[500]}88`,
    "peekViewResult.background": colors.black,
    "settings.headerForeground": colors.gray[300],
    "settings.modifiedItemIndicator": colors.blue[600],
    "welcomePage.buttonBackground": colors.gray[900],
    "welcomePage.buttonHoverBackground": colors.gray[800]
  },
  semanticHighlighting: true,
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: colors.gray[600]
      }
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.language"
      ],
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: colors.violet[400]
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: colors.gray[300]
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: colors.emerald[400]
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: colors.pink[400]
      }
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: colors.pink[400]
      }
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java"
      ],
      settings: {
        foreground: colors.gray[300]
      }
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source"
      ],
      settings: {
        foreground: colors.blue[200]
      }
    },
    {
      scope: "support",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "variable",
      settings: {
        foreground: colors.amber[400]
      }
    },
    {
      scope: "variable.other",
      settings: {
        foreground: colors.gray[300]
      }
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: colors.pink[300]
      }
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: colors.pink[300]
      }
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: colors.pink[300]
      }
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: colors.pink[300]
      }
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: colors.pink[400],
        foreground: colors.black,
        content: "^M"
      }
    },
    {
      scope: "message.error",
      settings: {
        foreground: colors.pink[300]
      }
    },
    {
      scope: "string source",
      settings: {
        foreground: colors.gray[300]
      }
    },
    {
      scope: "string variable",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: colors.blue[200]
      }
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      settings: {
        foreground: colors.blue[200]
      }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: colors.emerald[400]
      }
    },
    {
      scope: "support.constant",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "support.variable",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: colors.amber[400]
      }
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: colors.blue[400]
      }
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: colors.emerald[400]
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: colors.gray[300]
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: colors.gray[300]
      }
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      settings: {
        background: colors.pink[900],
        foreground: colors.pink[300]
      }
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      settings: {
        background: colors.emerald[900],
        foreground: colors.emerald[400]
      }
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: colors.amber[900],
        foreground: colors.amber[400]
      }
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: colors.gray[900],
        background: colors.blue[400]
      }
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: colors.violet[400],
        fontStyle: "bold"
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: colors.blue[400]
      }
    },
    {
      scope: "meta.output",
      settings: {
        foreground: colors.blue[400]
      }
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      settings: {
        foreground: colors.gray[400]
      }
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: colors.pink[300]
      }
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: colors.blue[200],
        fontStyle: "underline"
      }
    }
  ]
}
