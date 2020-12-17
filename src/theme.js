/**
 * List of all themable colors --> https://gist.github.com/alexperronnet/a2339cef2dd4f69ad2deaa6af5b38539
 * Theme color reference --> https://github.com/Microsoft/vscode-docs/blob/master/api/references/theme-color.md
 * Color palette reference --> https://material-ui.com/customization/color/#color-palette
 */

const colors = require("@material-ui/core/colors")

function getTheme({ style, name, type }) {
  const pick = options => options[style]

  return {
    semacnticHighlighting: true,
    name: name,
    type: type,
    colors: {
      focusBorder: pick({
        light: colors.blue[400],
        dark: colors.blue[600]
      }),
      foreground: pick({
        light: colors.grey[700],
        dark: colors.blueGrey[200]
      }),
      descriptionForeground: pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      errorForeground: pick({
        light: colors.red[600],
        dark: colors.pink[300]
      }),
      "textLink.foreground": pick({
        light: colors.blue[500],
        dark: colors.blue[400]
      }),
      "textLink.activeForeground": pick({
        light: colors.blue[600],
        dark: colors.blue[200]
      }),
      "textBlockQuote.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[900]
      }),
      "textBlockQuote.border": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[700]
      }),
      "textCodeBlock.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[800]
      }),
      "textPreformat.foreground": pick({
        light: colors.grey[600],
        dark: colors.blueGrey[200]
      }),
      "textSeparator.foreground": pick({
        light: colors.grey[300],
        dark: colors.blueGrey[600]
      }),
      "button.background": pick({
        light: colors.green[600],
        dark: colors.teal[700]
      }),
      "button.foreground": pick({
        light: colors.common.white,
        dark: colors.common.white
      }),
      "button.hoverBackground": pick({
        light: colors.green[700],
        dark: colors.teal[600]
      }),
      "checkbox.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[700]
      }),
      "checkbox.border": pick({
        light: colors.grey[300],
        dark: colors.grey[900]
      }),
      "dropdown.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[800]
      }),
      "dropdown.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "dropdown.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "dropdown.listBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "input.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[800]
      }),
      "input.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "input.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "input.placeholderForeground": pick({
        light: colors.grey[400],
        dark: colors.blueGrey[400]
      }),
      "badge.foreground": pick({
        light: colors.blue[600],
        dark: colors.blue[200]
      }),
      "badge.background": pick({
        light: colors.blue[100],
        dark: colors.blue[700]
      }),
      "progressBar.background": pick({
        light: colors.blue[400],
        dark: colors.blue[500]
      }),
      "titleBar.activeForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "titleBar.activeBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "titleBar.inactiveForeground": pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      "titleBar.inactiveBackground": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "titleBar.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "activityBar.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "activityBar.inactiveForeground": pick({
        light: colors.grey[400],
        dark: colors.blueGrey[500]
      }),
      "activityBar.background": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "activityBarBadge.foreground": pick({
        light: colors.common.white,
        dark: colors.common.white
      }),
      "activityBarBadge.background": pick({
        light: colors.blue[400],
        dark: colors.blue[500]
      }),
      "activityBar.activeBorder": pick({
        light: colors.deepOrange[400],
        dark: colors.teal[300]
      }),
      "activityBar.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "sideBar.foreground": pick({
        light: colors.grey[600],
        dark: colors.blueGrey[200]
      }),
      "sideBar.background": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "sideBar.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "sideBarTitle.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "sideBarSectionHeader.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "sideBarSectionHeader.background": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "sideBarSectionHeader.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "list.hoverForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "list.inactiveSelectionForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "list.activeSelectionForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "list.hoverBackground": pick({
        light: "#ebf0f4",
        dark: "#282e34"
      }),
      "list.inactiveSelectionBackground": pick({
        light: "#e8eaed",
        dark: "#282e34"
      }),
      "list.activeSelectionBackground": pick({
        light: "#e2e5e9",
        dark: "#39414a"
      }),
      "list.inactiveFocusBackground": pick({
        light: colors.blue[100],
        dark: "#1d2d3e"
      }),
      "list.focusBackground": pick({
        light: "#cce5ff",
        dark: colors.blue[700]
      }),
      "tree.indentGuidesStroke": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[800]
      }),
      "notificationCenterHeader.foreground": pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      "notificationCenterHeader.background": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[900]
      }),
      "notifications.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "notifications.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[800]
      }),
      "notifications.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "notificationsErrorIcon.foreground": pick({
        light: colors.red[500],
        dark: colors.pink[400]
      }),
      "notificationsWarningIcon.foreground": pick({
        light: colors.orange[600],
        dark: colors.orange[300]
      }),
      "notificationsInfoIcon.foreground": pick({
        light: colors.blue[600],
        dark: colors.blue[400]
      }),
      "pickerGroup.border": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[700]
      }),
      "pickerGroup.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "quickInput.background": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[900]
      }),
      "quickInput.foreground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "statusBar.foreground": pick({
        light: colors.grey[600],
        dark: colors.blueGrey[200]
      }),
      "statusBar.background": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "statusBar.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "statusBar.noFolderBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "statusBar.debuggingBackground": pick({
        light: colors.deepOrange[400],
        dark: colors.teal[300]
      }),
      "statusBar.debuggingForeground": pick({
        light: colors.common.white,
        dark: colors.common.white
      }),
      "statusBarItem.prominentBackground": pick({
        light: "#e8eaed",
        dark: "#282e34"
      }),
      "editorGroupHeader.tabsBackground": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "editorGroupHeader.tabsBorder": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "editorGroup.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "tab.activeForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "tab.inactiveForeground": pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      "tab.inactiveBackground": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "tab.activeBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "tab.hoverBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "tab.unfocusedHoverBackground": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "tab.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "tab.unfocusedActiveBorderTop": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "tab.activeBorder": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "tab.unfocusedActiveBorder": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "tab.activeBorderTop": pick({
        light: colors.deepOrange[400],
        dark: colors.teal[300]
      }),
      "breadcrumb.foreground": pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      "breadcrumb.focusForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "breadcrumb.activeSelectionForeground": pick({
        light: colors.grey[600],
        dark: colors.blueGrey[200]
      }),
      "breadcrumbPicker.background": pick({
        light: colors.grey[100],
        dark: "#2b3036"
      }),
      "editor.foreground": pick({
        light: colors.grey[900],
        dark: colors.blueGrey[50]
      }),
      "editor.background": pick({
        light: colors.common.white,
        dark: colors.blueGrey[900]
      }),
      "editorWidget.background": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "editor.foldBackground": pick({
        light: colors.grey[100],
        dark: "#282e33"
      }),
      "editor.lineHighlightBackground": pick({
        light: colors.grey[100],
        dark: "#2b3036"
      }),
      "editorLineNumber.foreground": pick({
        light: "#1b1f234d",
        dark: colors.blueGrey[700]
      }),
      "editorLineNumber.activeForeground": pick({
        light: colors.grey[900],
        dark: colors.blueGrey[50]
      }),
      "editorIndentGuide.background": pick({
        light: "#eff2f6",
        dark: colors.blueGrey[900]
      }),
      "editorIndentGuide.activeBackground": pick({
        light: "#d7dbe0",
        dark: colors.blueGrey[800]
      }),
      "editorWhitespace.foreground": pick({
        light: colors.grey[300],
        dark: colors.blueGrey[700]
      }),
      "editorCursor.foreground": pick({
        light: colors.blue[700],
        dark: colors.blue[200]
      }),
      "editor.findMatchBackground": pick({
        light: colors.amber[400],
        dark: `${colors.amber[500]}44`
      }),
      "editor.findMatchHighlightBackground": pick({
        light: `${colors.amber[400]}66`,
        dark: `${colors.amber[500]}22`
      }),
      "editor.inactiveSelectionBackground": pick({
        light: `${colors.blue[500]}11`,
        dark: "#3392FF22"
      }),
      "editor.selectionBackground": pick({
        light: `${colors.blue[500]}25`,
        dark: "#3392FF44"
      }),
      "editor.selectionHighlightBackground": pick({
        light: `${colors.green[400]}40`,
        dark: "#17E5E633"
      }),
      "editor.selectionHighlightBorder": pick({
        light: `${colors.green[400]}00`,
        dark: "#17E5E600"
      }),
      "editor.wordHighlightBackground": pick({
        light: `${colors.green[400]}00`,
        dark: "#17E5E600"
      }),
      "editor.wordHighlightStrongBackground": pick({
        light: `${colors.green[400]}00`,
        dark: "#17E5E600"
      }),
      "editor.wordHighlightBorder": pick({
        light: "#24943e99",
        dark: "#17E5E699"
      }),
      "editor.wordHighlightStrongBorder": pick({
        light: "#24943e50",
        dark: "#17E5E666"
      }),
      "editorBracketMatch.background": pick({
        light: `${colors.green[400]}40`,
        dark: "#17E5E650"
      }),
      "editorBracketMatch.border": pick({
        light: `${colors.green[400]}00`,
        dark: "#17E5E600"
      }),
      "editorGutter.modifiedBackground": pick({
        light: colors.blue[400],
        dark: colors.blue[400]
      }),
      "editorGutter.addedBackground": pick({
        light: colors.green[500],
        dark: colors.teal[500]
      }),
      "editorGutter.deletedBackground": pick({
        light: colors.red[500],
        dark: colors.pink[400]
      }),
      "diffEditor.insertedTextBackground": pick({
        light: `${colors.green[400]}22`,
        dark: `${colors.green[500]}30`
      }),
      "diffEditor.removedTextBackground": pick({
        light: `${colors.red[500]}22`,
        dark: `${colors.red[500]}30`
      }),
      "scrollbar.shadow": pick({
        light: `${colors.blueGrey[500]}33`,
        dark: `${colors.common.black}8`
      }),
      "scrollbarSlider.background": pick({
        light: `${colors.blueGrey[400]}33`,
        dark: `${colors.blueGrey[500]}33`
      }),
      "scrollbarSlider.hoverBackground": pick({
        light: `${colors.blueGrey[400]}44`,
        dark: `${colors.blueGrey[500]}44`
      }),
      "scrollbarSlider.activeBackground": pick({
        light: `${colors.blueGrey[400]}88`,
        dark: `${colors.blueGrey[500]}88`
      }),
      "editorOverviewRuler.border": pick({
        light: colors.common.white,
        dark: colors.grey[900]
      }),
      "panel.background": pick({
        light: colors.grey[100],
        dark: "#222d32"
      }),
      "panel.border": pick({
        light: colors.grey[200],
        dark: colors.grey[900]
      }),
      "panelTitle.activeBorder": pick({
        light: colors.deepOrange[400],
        dark: colors.teal[300]
      }),
      "panelTitle.activeForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "panelTitle.inactiveForeground": pick({
        light: colors.grey[500],
        dark: colors.blueGrey[400]
      }),
      "panelInput.border": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[800]
      }),
      "terminal.foreground": pick({
        light: colors.grey[600],
        dark: colors.blueGrey[200]
      }),
      "gitDecoration.addedResourceForeground": pick({
        light: colors.green[500],
        dark: colors.teal[400]
      }),
      "gitDecoration.modifiedResourceForeground": pick({
        light: colors.blue[600],
        dark: colors.blue[400]
      }),
      "gitDecoration.deletedResourceForeground": pick({
        light: colors.red[500],
        dark: colors.pink[400]
      }),
      "gitDecoration.untrackedResourceForeground": pick({
        light: colors.green[500],
        dark: colors.teal[400]
      }),
      "gitDecoration.ignoredResourceForeground": pick({
        light: colors.grey[400],
        dark: colors.blueGrey[500]
      }),
      "gitDecoration.conflictingResourceForeground": pick({
        light: colors.orange[600],
        dark: colors.orange[300]
      }),
      "gitDecoration.submoduleResourceForeground": pick({
        light: colors.grey[400],
        dark: colors.blueGrey[500]
      }),
      "debugToolBar.background": pick({
        light: colors.common.white,
        dark: "#2b3036"
      }),
      "editor.stackFrameHighlightBackground": pick({
        light: colors.amber[100],
        dark: "#a707"
      }),
      "editor.focusedStackFrameHighlightBackground": pick({
        light: colors.amber[200],
        dark: "#b808"
      }),
      "peekViewEditor.matchHighlightBackground": pick({
        dark: `${colors.amber[500]}33`
      }),
      "peekViewResult.matchHighlightBackground": pick({
        dark: `${colors.amber[500]}33`
      }),
      "peekViewEditor.background": pick({
        dark: "#222d3288"
      }),
      "peekViewResult.background": pick({
        dark: "#222d32"
      }),
      "settings.headerForeground": pick({
        light: colors.grey[800],
        dark: colors.blueGrey[50]
      }),
      "settings.modifiedItemIndicator": pick({
        light: colors.blue[400],
        dark: colors.blue[500]
      }),
      "welcomePage.buttonBackground": pick({
        light: colors.grey[100],
        dark: colors.blueGrey[800]
      }),
      "welcomePage.buttonHoverBackground": pick({
        light: colors.grey[200],
        dark: colors.blueGrey[700]
      })
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({
            light: colors.grey[500],
            dark: colors.blueGrey[500]
          })
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
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({
            light: colors.purple[500],
            dark: colors.deepPurple[300]
          })
        }
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: pick({
            light: colors.green[600],
            dark: colors.teal[300]
          })
        }
      },
      {
        scope: "keyword",
        settings: {
          foreground: pick({
            light: colors.red[500],
            dark: colors.pink[300]
          })
        }
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: pick({
            light: colors.red[500],
            dark: colors.pink[300]
          })
        }
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        settings: {
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source"
        ],
        settings: {
          foreground: pick({
            light: colors.blue[800],
            dark: colors.blue[200]
          })
        }
      },
      {
        scope: "support",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "variable",
        settings: {
          foreground: pick({
            light: colors.orange[600],
            dark: colors.orange[300]
          })
        }
      },
      {
        scope: "variable.other",
        settings: {
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({
            light: colors.red[500],
            dark: colors.pink[300]
          }),
          foreground: pick({
            light: colors.grey[100],
            dark: colors.blueGrey[900]
          }),
          content: "^M"
        }
      },
      {
        scope: "message.error",
        settings: {
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: "string source",
        settings: {
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: "string variable",
        settings: {
          foreground: pick({
            light: colors.red[600],
            dark: colors.pink[300]
          })
        }
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: pick({
            light: colors.blue[800],
            dark: colors.blue[100]
          })
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
          foreground: pick({
            light: colors.blue[800],
            dark: colors.blue[100]
          })
        }
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: pick({
            light: colors.green[600],
            dark: colors.teal[300]
          })
        }
      },
      {
        scope: "support.constant",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "support.variable",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: pick({
            light: colors.orange[600],
            dark: colors.orange[300]
          })
        }
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: pick({
            light: colors.green[600],
            dark: colors.teal[300]
          })
        }
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: pick({
            light: colors.grey[900],
            dark: colors.blueGrey[50]
          })
        }
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        settings: {
          background: pick({
            light: colors.red[50],
            dark: colors.pink[900]
          }),
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        settings: {
          background: pick({
            light: colors.green[50],
            dark: colors.teal[900]
          }),
          foreground: pick({
            light: colors.green[600],
            dark: colors.teal[300]
          })
        }
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: pick({
            light: colors.orange[100],
            dark: colors.orange[800]
          }),
          foreground: pick({
            light: colors.orange[600],
            dark: colors.orange[300]
          })
        }
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: pick({
            light: colors.grey[100],
            dark: colors.blueGrey[800]
          }),
          background: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({
            light: colors.purple[500],
            dark: colors.deepPurple[300]
          }),
          fontStyle: "bold"
        }
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
        }
      },
      {
        scope: "meta.output",
        settings: {
          foreground: pick({
            light: colors.blue[600],
            dark: colors.blue[400]
          })
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
          foreground: pick({
            light: colors.grey[600],
            dark: colors.blueGrey[200]
          })
        }
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: pick({
            light: colors.red[700],
            dark: colors.pink[200]
          })
        }
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: pick({
            light: colors.red[800],
            dark: colors.pink[100]
          }),
          fontStyle: "underline"
        }
      }
    ]
  }
}

module.exports = getTheme
