$(function () {
            $('#dashboard').igTileManager({
                layoutConfiguration: {
                    gridLayout: {
                        columnWidth: '25%',
                        columnHeight: '50%',
                        marginLeft: 10,
                        marginTop: 10
                    }
                },
                dataSource: dataSource,
                maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p>${text}</p>' +
                '<div style="clear: both">Skills:</div>' +
                '<ul>{{each ${skills} }}<li>${skills.description}</li>{{/each}}</ul>' +
                '<div>LinkedIn: <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
                minimizedState: '<h3>${name}</h3>'
            });
            $('#dashboard').find('ul').igTree();
        });