function removeImportantFromStylesheets() {
    var styleSheets = document.styleSheets;

    for (var i = 0; i < styleSheets.length; i++) {
        var sheet = styleSheets[i];
        try {
            var rules = sheet.cssRules || sheet.rules;
            for (var j = 0; j < rules.length; j++) {
                var rule = rules[j];
                if (rule.style) {
                    // Remove !important from cssText
                    var cssText = rule.cssText.replace(/ !important/g, '');
                    // Reapply the style without !important
                    rule.style.cssText = cssText;
                }
            }
        } catch (e) {
            console.warn('Unable to access stylesheet', e);
        }
    }
}

removeImportantFromStylesheets();
