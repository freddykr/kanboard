Kanboard.BoardTask = function(app) {
    this.app = app;
};

// TODO: rewrite this code
Kanboard.BoardTask.prototype.listen = function() {
    var self = this;

    $(document).on("click", ".task-board-change-assignee", function(e) {
        e.preventDefault();
        e.stopPropagation();
        KB.modal.open($(this).data("url"), "medium", false);
    });

    $(document).on("click", ".task-board", function(e) {
        if (e.target.tagName != "A" && e.target.tagName != "IMG") {
            window.location = $(this).data("task-url");
        }
    });
};
