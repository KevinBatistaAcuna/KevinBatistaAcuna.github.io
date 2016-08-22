var pkg = require('./package.json');
var fs = require('fs');
var path = require('path');

module.exports = function() {
    var h2 = '<h2 class="banner-client">' + pkg.title + '</h2>';
    var h3 = '<h3 class="banner-name">' + pkg.client + '</h3>';
    var table = '<div class="table-responsive"><table class="table"><tbody>';
    var tr = '<tr><td class="b-top">';
    var ENDtr = '</td></tr>';
    var SRC_PATH = 'src/projects';
    var FOLDER = getFolders(SRC_PATH);


    function getFolders(dir) {
        return fs.readdirSync(dir)
            .filter(function() {
                return fs.statSync(path.join(dir)).isDirectory();
            });
    }
    
    var htmlTask = FOLDER.map(function(FOLDER) {

        var folderName = FOLDER.replace(/_/g," ");
        var links = '';

        table += tr;

        links += '<a class="pull-left banner-size" href="' + FOLDER + '/index.html" target="_blank">' + folderName + '</a>';

        table += links;
        table += ENDtr;

    });

        table += '</tbody></table></div>';

        html = h2 + h3 + table;

        return html;

        return htmlTask;

}