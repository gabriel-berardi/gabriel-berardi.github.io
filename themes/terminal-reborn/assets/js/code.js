document.addEventListener('DOMContentLoaded', function() {
  // Function to create and setup copy button
  function setupCopyButton(codeContent, container, position) {
    position = position || 'append';
    var cpbutton = document.createElement("button");
    cpbutton.classList.add("copy-button");
    cpbutton.innerText = "Copy";

    cpbutton.addEventListener("click", function() {
      var originalText = cpbutton.innerText;
      cpbutton.innerText = "Copied!";
      cpbutton.classList.add("copied");

      setTimeout(function() {
        cpbutton.innerText = originalText;
        cpbutton.classList.remove("copied");
      }, 2000);

      navigator.clipboard.writeText(codeContent);
    });

    if (position === 'append') {
      container.append(cpbutton);
    } else if (position === 'prepend') {
      container.prepend(cpbutton);
    }

    return cpbutton;
  }

  // Handle regular chroma blocks
  var regularBlocks = document.querySelectorAll("code[data-lang]");

  for (var i = 0; i < regularBlocks.length; i++) {
    var bc = regularBlocks[i];
    var pre = bc.parentElement;
    var highlight = pre.closest(".highlight");

    // Skip if already processed (e.g., inside collapsable-code)
    if (highlight && highlight.querySelector(".code-title")) continue;

    var content = bc.innerText.split("\n").filter(Boolean).join("\n");
    var title = document.createElement("div");
    var lang = bc.dataset.lang;
    title.classList.add("code-title");
    title.innerText = lang;

    if (navigator.clipboard !== undefined) {
      setupCopyButton(content, title);
    }

    if (highlight) {
      highlight.prepend(title);
    } else {
      pre.before(title);
    }
  }

  // Handle collapsable-code blocks
  var collapsableBlocks = document.querySelectorAll(".collapsable-code");

  for (var j = 0; j < collapsableBlocks.length; j++) {
    var block = collapsableBlocks[j];
    var summary = block.querySelector("summary");
    var codeBlock = block.querySelector("code");

    if (!codeBlock || !navigator.clipboard) continue;

    var content = codeBlock.innerText.split("\n").filter(Boolean).join("\n");
    var existingButton = summary.querySelector(".collapsable-code__copy");

    if (existingButton) {
      existingButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        var originalText = existingButton.innerText;
        existingButton.innerText = "Copied!";
        existingButton.classList.add("copied");

        setTimeout(function() {
          existingButton.innerText = originalText;
          existingButton.classList.remove("copied");
        }, 2000);

        navigator.clipboard.writeText(content);
      });
    }
  }
});
