using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SearchComponent;

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
                Name = "Jürgen ",
                FamilyName = "Gutsch",
                CityCountry = "Switzerland Basel",
                Metadata = "ASP.NET Core Angular2 Angular Typescript javascript Microsoft MVP Azure",
                Info = "Jürgen Gutsch is software developer, consultant and trainer at the YooApplications AG (yooapps.com) in Basel (Switzerland). Along with family and job, he is a free author trainer und consultant, writes about ASP.NET, .NET, web technologies and Community in a blog on http://asp.net-hacker.rocks und leads the .NET user group in Basel (Switzerland)",
                Web = "http://asp.net-hacker.rocks/",
                Twitter = "https://twitter.com/sharpcms",
                Github = "https://github.com/JuergenGutsch",
            });
        }
    }
}
