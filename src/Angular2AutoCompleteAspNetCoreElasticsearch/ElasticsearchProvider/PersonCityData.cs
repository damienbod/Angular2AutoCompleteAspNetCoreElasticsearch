using System.Collections.Generic;

namespace SearchComponent
{
    public static class PersonCityData
    {
        public static List<PersonCity> Data = new List<PersonCity>();

        public static void CreateTestData()
        {
            Data.Add(new PersonCity {
                Id = 1, Name = "Damien", FamilyName = "Bowden", CityCountry="Switzerland",
                Metadata = "ASP.NET Core EFCore SQLite Angular2 Angular Typescript javascript Microsoft MVP webpack security",
                Info = "I am an engineer, Microsoft MVP, living in Switzerland interested in web development. My favorite technologies are ASP.NET Core, EFCore, ASP.NET, WebAPI, AngularJS, Angular 2, Typescript, MS SQL Server, SQLite and Elasticsearch.", 
                Web= "https://damienbod.com",
                Twitter= "https://twitter.com/damien_bod",
                Github = "https://github/damienbod",
            });

            Data.Add(new PersonCity
            {
                Id = 2,
                Name = "Fabian",
                FamilyName = "Grossbrink",
                CityCountry = "Switzerland St Gallen",
                Metadata = "ASP.NET Core Angular2 Angular Typescript javascript Microsoft MVP webpack",
                Info = "Fabian is Professional Software Engineer in Winterthur at the Noser Engineering AG. He is Microsoft Technology Ambassador in Switzerland, MVP and Microsoft Certified Specialist in Desktop- (WPF) and Web application development with Asp.Net, WebAPI/MVC, HTML, Javascript, Azure and Webservices. His attention is particularly on developing cross platform (web) applications with AngularJs, Ionic, Cordova, Electron and connected frameworks and tools. Additionally Fabian is certified Scrum Master and Scrum developer as well as active speaker for Microsoft in topics of web development.Interests are ASP.NET Core, Javascript(AngularJs, Angular2,...), Typescript, WebAPI(and Architecture), modern architecture for distributed systems (REST - Services), Entity Framework, TFS, Coaching, Agile Development(Scrum) and many more",
                Web = "http://fabian-gosebrink.com/",
                Twitter = "https://twitter.com/FabianGosebrink",
                Github = "https://github.com/FabianGosebrink",
            });

            Data.Add(new PersonCity
            {
                Id = 3,
                Name = "Jürgen",
                FamilyName = "Gutsch",
                CityCountry = "Switzerland Basel",
                Metadata = "ASP.NET Core Angular2 Angular Typescript javascript Microsoft MVP Azure",
                Info = "Jürgen Gutsch is software developer, consultant and trainer at the YooApplications AG (yooapps.com) in Basel (Switzerland). Along with family and job, he is a free author trainer und consultant, writes about ASP.NET, .NET, web technologies and Community in a blog on http://asp.net-hacker.rocks und leads the .NET user group in Basel (Switzerland)",
                Web = "http://asp.net-hacker.rocks/",
                Twitter = "https://twitter.com/sharpcms",
                Github = "https://github.com/JuergenGutsch",
            });

            Data.Add(new PersonCity
            {
                Id = 4,
                Name = "Benjamin",
                FamilyName = "Abt",
                CityCountry = "Germany",
                Metadata = "ASP.NET Core Microsoft MVP Azure AngularJS TypeScript",
                Info = "Benjamin Abt is a software architect and developer focused on .NET, ASP.NET, Azure, AngularJS and TypeScript. He became an ASP.NET/IIS MVP on July, 2015. Studio is his second home. He's an administrator and moderator of the largest german-speaking C# forum, www.mycsharp.de and he spends a lot of time supporting other users on their problems and projects. His blog SCHWABENCODE.com is well known in the german - speaking community. It's focused on german, because he thinks the DACH region has great developers, is a great location for research and development but still there are a lot of developers who do easier with their native language. On GitHub you can follow him on https://github.com/SchwabenCode/ for releases and https://github.com/BenjaminAbt for samples. Ben currently works as Software Architect focused on.NET and Cloud technologies.",
                Web = "http://www.benjamin-abt.com",
                Twitter = "https://twitter.com/SCHWABENCODEcom",
                Github = "https://github.com/BenjaminAbt",
            });

            Data.Add(new PersonCity
            {
                Id = 5,
                Name = "Alexander",
                FamilyName = "Zeitler",
                CityCountry = "Germany Karlsruhe, BW",
                Metadata = "ASP.NET MVC Microsoft MVP Web API",
                Info = "Alexander Zeitler is a self-employed Web Developer who has spent 17 years working mainly for the tooling and machining industry as well as plant manufacturing, where he works mainly with ASP.NET MVC and now ASP.NET Web API on the server side and HTML5, CSS3 and JavaScript on the client side. He has been rewarded repeatedly with the Microsoft MVP award in ASP.NET for his engagement with the German.NET community and he maintains a blog at http://blog.alexonasp.net, which he has kept since 2003.",
                Web = "https://alexanderzeitler.com/",
                Twitter = "https://twitter.com/alexzeitler_",
                Github = "https://github.com/alexzeitler",
            });

            Data.Add(new PersonCity
            {
                Id = 6,
                Name = "Christos",
                FamilyName = "Sakellarios",
                CityCountry = "Greece Athens Attica",
                Metadata = "ASP.NET MVC Microsoft MVP Web API Typescript security",
                Info = "Senior Web Developer Blogger ",
                Web = "https://chsakell.com/",
                Twitter = "https://twitter.com/chsakellsblog",
                Github = "https://github.com/chsakell",
            });

            Data.Add(new PersonCity
            {
                Id = 7,
                Name = "Ali Tugberk",
                FamilyName = "Ugurlu",
                CityCountry = "United Kingdom Cambridge",
                Metadata = "ASP.NET MVC Microsoft MVP Web API",
                Info = "I am a web guy, Microsoft MVP and software developer specialized mainly on .NET Web technologies. I've worked at the tourism industry to build tourism software services and products for long time and now, I am working at Redgate Software as a Software Engineer helping people do database delivery in a joyful way. I am also a very involved member in the community and try my way to expose my knowledge to others through my blog, webcasts, authoring books, giving talks on various topics and so on. I live in lovely and green Cambridge, UK and I am married to a lovely woman.",
                Web = "http://www.tugberkugurlu.com",
                Twitter = "https://twitter.com/tourismgeek",
                Github = "https://github.com/tugberkugurlu",
            });

            Data.Add(new PersonCity
            {
                Id = 8,
                Name = "Scott",
                FamilyName = "Hanselman",
                CityCountry = "USA",
                Metadata = "ASP.NET Core Web API",
                Info = "My name is Scott Hanselman. I'm a programmer, teacher, and speaker. I work out of my home office in Portland, Oregon for the Web Platform Team at Microsoft, but this blog, its content and opinions are my own. I blog about technology, culture, gadgets, diversity, code, the web, where we're going and where we've been. I'm excited about community, social equity, media, entrepreneurship and above all, the open web.",
                Web = "http://www.hanselman.com/",
                Twitter = "https://twitter.com/shanselman",
                Github = "#",
            });

            Data.Add(new PersonCity
            {
                Id = 9,
                Name = "Roberto",
                FamilyName = "Simonetti",
                CityCountry = "Italy",
                Metadata = ".NET TypeScript Angular Angular2 ASP.NET Core",
                Info = "My passion was born with Basic on TI-99/4A & Commodore. At school I discovered Turbo Pascal & Java. I loved Visual Basic, .NET, and now TypeScript & Angular.",
                Web = "https://github.com/robisim74",
                Twitter = "https://twitter.com/robisim74",
                Github = "https://github.com/robisim74",
            });

            Data.Add(new PersonCity
            {
                Id = 10,
                Name = "John",
                FamilyName = "Papa",
                CityCountry = "USA",
                Metadata = "Angular2 Angular",
                Info = "Hi, I'm John Papa. I author this blog, create courses for Pluralsight and am a Google Developer Expert and Microsoft Regional Director. I speak at events and train technology thought leaders",
                Web = "https://johnpapa.net/about/",
                Twitter = "https://twitter.com/john_papa",
                Github = "https://github.com/johnpapa",
            });

            Data.Add(new PersonCity
            {
                Id = 11,
                Name = "Dan",
                FamilyName = "Wahlin",
                CityCountry = "USA",
                Metadata = "JavaScript Angular Node.js, C# ASP.NET MVC Web API Docker",
                Info = "Dan Wahlin founded Wahlin Consulting which provides consulting and training services on Web technologies such as JavaScript, Angular, Node.js, C#, ASP.NET MVC, Web API, and Docker. He’s also published over 10 developer courses on Pluralsight.com and Udemy.com including the new Docker for Web Developers course. Dan is a Microsoft MVP and Regional Director and speaks at conferences and user groups around the world.  Dan has written several books on Web technologies, hundreds of technical articles and blog posts (http://blog.codewithdan.com) and runs the Web Weekly newsletter - a great way to stay up on the latest technologies. Follow Dan on Twitter @DanWahlin.",
                Web = "https://blog.codewithdan.com/",
                Twitter = "https://twitter.com/danwahlin",
                Github = "https://github.com/danwahlin",
            });

            Data.Add(new PersonCity
            {
                Id = 12,
                Name = "Jeremy",
                FamilyName = "Likness",
                CityCountry = "USA",
                Metadata = "JavaScript Angular Angular2 C# ASP.NET",
                Info = "Jeremy Likness leads the application development practice for Atlanta-based iVision and is an experienced entrepreneur and technology executive who has successfully helped ship commercial enterprise software for 20 years. He specializes in catalyzing growth, developing ideas and creating value through delivering software in technical enterprises. His roles as business owner, technology executive and hands-on developer provided unique opportunities to directly impact the bottom line of multiple businesses by helping them grow and increase their organizational capacity while improving operational efficiency. He has worked with several initially small companies like Manhattan Associates and AirWatch before they grew large and experienced their transition from good to great while helping direct vision and strategy to embrace changing technology and markets. Jeremy is capable of quickly adapting to new paradigms and helps technology teams endure change by providing strong leadership, working with team members “in the trenches” and mentoring them in the soft skills that are key for engineers to bridge the gap between business and technology.",
                Web = "http://csharperimage.jeremylikness.com/",
                Twitter = "https://twitter.com/jeremylikness",
                Github = "https://github.com/jeremylikness",
            });

            Data.Add(new PersonCity
            {
                Id = 13,
                Name = "Jeremy",
                FamilyName = "Likness",
                CityCountry = "USA Vermont",
                Metadata = "Entity Framework EFCore C# ASP.NET PostgreSQL DDD Microsoft MVP",
                Info = "Vermont Geekette, DDD, .NET (& EF) Mentor, Author, MS MVP, MS Regional Director, VTdotNET, Pluralsight, MSDN Mag. Talk to me about mentoring your dev team!",
                Web = "http://thedatafarm.com/blog/",
                Twitter = "https://twitter.com/julielerman",
                Github = "https://github.com/julielerman",
            });

            Data.Add(new PersonCity
            {
                Id = 14,
                Name = "Kurata",
                FamilyName = "Deborah",
                CityCountry = "Pleasanton, CA",
                Metadata = "Angular Angular2 Microsoft MVP",
                Info = "Software developer, independent consultant, Pluralsight author, speaker, Microsoft MVP, Google GDE. Co-chair of Eastbay .NET, which meets in Berkeley.",
                Web = "http://blogs.msmvps.com/deborahk/",
                Twitter = "https://twitter.com/DeborahKurata",
                Github = "https://github.com/DeborahK",
            });

            Data.Add(new PersonCity
            {
                Id = 15,
                Name = "Andrew",
                FamilyName = "Lock",
                CityCountry = "Plymouth, UK",
                Metadata = "ASP.NET Core security",
                Info = "My name is Andrew Lock, though everyone knows me as ‘Sock’. I am a full-time developer, working predominantly in full stack ASP.NET development in Devon, UK. I graduated with an MEng in Engineering from Cambridge University in 2008, and completed my PhD in Medical Image Processing in 2014. I have experience primarily with C# and VB ASP.NET, working both in MVC and WebForms, but have also worked professionally with C++ and WinForms. ",
                Web = "http://andrewlock.net/",
                Twitter = "https://twitter.com/andrewlocknet",
                Github = "https://github.com/andrewlock",
            });

            Data.Add(new PersonCity
            {
                Id = 16,
                Name = "Brock",
                FamilyName = "Allen",
                CityCountry = "Barrington, RI ",
                Metadata = "ASP.NET Core security identityserver oidc javascript",
                Info = "Currently Brock is an independent consultant specializing in .NET, web development, and web - based security with 20 years of industry experience.Brock is the co - author of many security - related open source frameworks including IdentityServer, IdentityManager, and MembershipReboot.He also frequently posts to the ASP.NET forums, is a MVP for ASP.NET / IIS, a member of ASPInsiders and a contributor to the ASP.NET platform. Brock lives in Barrington, RI and can be reached at brockallen@gmail.com.",
                Web = "https://brockallen.com/",
                Twitter = "https://twitter.com/brocklallen",
                Github = "https://github.com/brockallen",
            });

            Data.Add(new PersonCity
            {
                Id = 17,
                Name = "Dominick",
                FamilyName = "Baier",
                CityCountry = "Germany",
                Metadata = "ASP.NET Core security identityserver",
                Info = "I am an independent consultant specializing in identity & access control. I help companies around the world designing & implementing authentication and authorization for their distributed web and native applications. I am the co-author of the popular OpenID Connect & OAuth 2.0 framework called IdentityServer (http://identityserver.io) , have written a couple of books and tweet as @leastprivilege.",
                Web = "https://leastprivilege.com/",
                Twitter = "https://twitter.com/leastprivilege",
                Github = "https://github.com/leastprivilege",
            });

            Data.Add(new PersonCity
            {
                Id = 18,
                Name = "Scott",
                FamilyName = "Brady",
                CityCountry = "Bristol, United Kingdom",
                Metadata = "ASP.NET Core security identityserver",
                Info = "I am a Senior Software Engineer at Rock Solid Knowledge. We offer software development consultancy, development and training services with myself specialising in all things Identity Server. I work predominantly in C# back-end and middleware systems with the beginnings of a specialisation in web security. I have had a focus on cloud computing since my MSc dissertation in 2013, gaining experience using various cloud based PaaS and IaaS offerings ever since. ",
                Web = "https://www.scottbrady91.com/",
                Twitter = "https://twitter.com/scottbrady91",
                Github = "https://github.com/scottbrady91",
            });

            Data.Add(new PersonCity
            {
                Id = 19,
                Name = "Shawn",
                FamilyName = "Wildermuth",
                CityCountry = "USA",
                Metadata = "ASP.NET Core .NET C#",
                Info = "Shawn Wildermuth is a fourteen-time Microsoft MVP (ASP.NET/IIS) and is involved with Microsoft as an ASP.NET Insider, ClientDev Insider and Windows Phone Insider. You may have taken one of his more than twenty courses for Pluralsight including Building a Web App with ASP.NET Core, MVC, EF and Angular and Bootstrap 3. He is also the author of eight books and dozens of articles on software development. He has been seen speaking at a variety of international conferences including TechEd, Oredev, SDC, VSLive, DevIntersection, MIX, DevTeach, DevConnections and DevReach. He is one of the Wilder Minds LLC.",
                Web = "http://wildermuth.com/",
                Twitter = "https://twitter.com/shawnwildermuth",
                Github = "https://github.com/shawnwildermuth",
            });
            
            Data.Add(new PersonCity
            {
                Id = 20,
                Name = "Minko",
                FamilyName = "Gechev",
                CityCountry = "San Francisco, California USA",
                Metadata = "Angular Angular2",
                Info = "I created a JavaScript user group in Sofia, which has (had) regular Beer.js meet-ups. For about fifteen years I’ve been training karate (since 1999) and since 2005 I’ve been using different programming languages (including Pascal, Haskell, C, C++, PHP, JavaScript, Io, Java, AspectJ, C#, VisualBasic, Ruby, Python, Perl, ActionScript, Prolog…even Clips) so as you might see I’ve met different programming paradigms – functional, object-oriented, prototype-based oo, aspect-oriented, logical programming, procedural…I just don’t have a patience to see what’s coming next after the OO “dictatorship” :-).",
                Web = "http://blog.mgechev.com/",
                Twitter = "https://twitter.com/mgechev",
                Github = "https://github.com/mgechev",
            });
            
        }
    }
}
