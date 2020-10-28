
(function() {

    /****************************************
     * Package data and constructor objects
     ****************************************/
    
     // Package data array (simulated data source)
        var data = [
            {
            name: '8/10',
            description: 'So many people are saying it is not horror - well they are right. ' 
            +'Haunted house tales are not horror, they are ghost stories. This is slow in building, ' 
            +'atmospheric and extremely intelligent.',
            author: 'durham100',
            url: 'https://www.imdb.com/review/rw6164711/?ref_=tt_urv',
            selector: 'p1'
        },
        {
            name: '10/10',
            description: 'This show requires patience like no other show, but boy does it pay off '
            +'in the end. The show started off well and created ample mystery in the first episode ' 
            +'or two, however the middle part of the show was like a maze where the viewers are '
            +'just trying to make sense of whatever they possibly can. It gets quite confusing yet '
            +'remains entertaining and will keep you watching on and on just to satisfy your curiosities. '
            +'The last two episodes are heavy-hitters and they provide satisfying answers to your ' 
            +'questions, as well as a satisfying end to this brilliant masterpiece.',
            author: 'saadhasan-36609',
            url: 'https://www.imdb.com/review/rw6161746/?ref_=tt_urv',
            selector: 'p2'
        },
        {
            name: '10/10',
            description: 'After watching Haunting of Hill House my expectations were set low for Bly Manor '
            +'because how was Mike Flanagan going to craftily create a show to top Hill House? Well '
            +'let me tell you, I was shook. Not only is Bly Manor a ghost story, it is a '
            +'love story. The character development is impressively done and the episodes kept '
            +'me constantly guessing. The ending took my breath away. Oh and once you watch the ending, '
            +'I encourage you to watch the first episode right after. You will thank me later. '
            +'Well done Mike Flanagan and well done Netflix.',
            author: 'bRabbit19',
            selector: 'p3'
        },
    ];
    
        function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.selector = data.selector; 
        }
    
        // Return today's dat, formatted
        var getTodaysDate = function() {
            var today = new Date();
            return today.toDateString();
        };
        
        var getEl = function (id) {
            return document.getElementById(id);
        }
    
        
        var writePackageInfo = function (package) {
            var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description');
            authEl = getEl(selector + '-author');

            //write package data to DOM elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
        }
    
        // Write date
        var dateEl = getEl('date');
        dateEl.textContent = getTodaysDate();
    
        // Write package data one-by-one
        var name = new Package(data[0]);
        writePackageInfo(name);
    
        var name = new Package(data[1]);
        writePackageInfo(name);

        var name = new Package(data[2]);
        writePackageInfo(name);
    
        //Package data implementing a for loop
        for (var i = 0; i < data.length; i++) {
            var package = new Package(data[i]);
            writePackageInfo(package);
        }
    
    }());