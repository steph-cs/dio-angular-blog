import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'blog-angular';

    mainNews = {
        cardAuthor: "Ana",
        cardDate: "12 JAN 2023",
        cardImg: "https://images.unsplash.com/photo-1625792387988-b12064ea917f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        cardTitle: "Como conseguir um emprego de programador no exterior: dicas práticas para sua jornada!",
        cardText: "Quer trabalhar com programação em outro país, mas não sabe por onde começar? Descubra as principais estratégias para se destacar  ...",
        cardKeys: ["Programação", "Internacional", "Carreira"]
    }
    listNews = [
        {
            cardAuthor: "Ana",
            cardDate: "12 JAN 2023",
            cardImg: "https://images.unsplash.com/photo-1625792387988-b12064ea917f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            cardTitle: "Como conseguir um emprego de programador no exterior: dicas práticas para sua jornada!",
            cardText: "Quer trabalhar com programação em outro país, mas não sabe por onde começar? Descubra as principais estratégias para se destacar  ...",
            cardKeys: ["Programação", "Internacional", "Carreira"]
        },
        {
            cardAuthor: "Ana",
            cardDate: "12 JAN 2023",
            cardImg: "https://images.unsplash.com/photo-1625792387988-b12064ea917f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            cardTitle: "Como conseguir um emprego de programador no exterior: dicas práticas para sua jornada!",
            cardText: "Quer trabalhar com programação em outro país, mas não sabe por onde começar? Descubra as principais estratégias para se destacar  ...",
            cardKeys: ["Programação", "Internacional", "Carreira"]
        },
        {
            cardAuthor: "Ana",
            cardDate: "12 JAN 2023",
            cardImg: "https://images.unsplash.com/photo-1625792387988-b12064ea917f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            cardTitle: "Como conseguir um emprego de programador no exterior: dicas práticas para sua jornada!",
            cardText: "Quer trabalhar com programação em outro país, mas não sabe por onde começar? Descubra as principais estratégias para se destacar  ...",
            cardKeys: ["Programação", "Internacional", "Carreira"]
        },
        {
            cardAuthor: "Ana",
            cardDate: "12 JAN 2023",
            cardImg: "https://images.unsplash.com/photo-1625792387988-b12064ea917f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            cardTitle: "Como conseguir um emprego de programador no exterior: dicas práticas para sua jornada!",
            cardText: "Quer trabalhar com programação em outro país, mas não sabe por onde começar? Descubra as principais estratégias para se destacar  ...",
            cardKeys: ["Programação", "Internacional", "Carreira"]
        },
    ]
}
