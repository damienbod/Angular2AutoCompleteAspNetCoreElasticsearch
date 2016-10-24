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
                Metadata = "ASP.NET Core EFCore SQLite Angular2 Angular Typescript javascript Microsoft MVP webpack",
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
            
        }
    }
}
