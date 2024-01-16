
interface MenuItem {
    id: number;
    title: string;
    listItems: Array<{
        id: number;
        title: string;
        url?: string; // Optional URL property, adjust as needed
        listItem?: Array<{
            id: number;
            title: string;
        }>;
    }>;
}

export const menu:Array<MenuItem> =[
    {
        id: 1 ,
        title:"مدیریت دارایی",
        listItems: [

        ],
    },
    {
        id: 2 ,
        title:"استان",
        listItems: [
            {
                id: 1,
                title: "تهران",
                url: "/",
            },
            {
                id: 2,
                title: "همدان",
                url: "/users/1",
            },
            {
                id: 3,
                title: "کرمان",
                url: "/users/1",
            },
            {
                id: 4,
                title: "لرستان",
                url: "/",
            },
            {
                id: 5,
                title: "خراسان جنوبی",
                url: "/users/1",
            },
            {
                id: 6,
                title: "گیلان",
                url: "/users/1",
            },
            {
                id: 7,
                title: "مازندران",
                url: "/",
            },
            {
                id: 8,
                title: "همدان",
                url: "/users/1",
            },
            {
                id: 9,
                title: "کرمان",
                url: "/users/1",
            },
        ],
    },
    {
        id: 3 ,
        title:"شهر",
        listItems: [
            {
                id: 1,
                title: "تهران",
                listItem:[
                    {
                        id: 1,
                        title: "تهران",
                    },
                    {
                        id: 2,
                        title: "ملارد",
                    },
                    {
                        id: 3,
                        title: "اسلام شهر",
                    },
                    {
                        id: 4,
                        title: "قدس",
                    },
                    {
                        id: 5,
                        title: "صالحیه",
                    },
                ]
            },
            {
                id: 2,
                title: "کرمان",
                listItem:[
                    {
                        id: 1,
                        title: "کرمان",
                    },
                    {
                        id: 2,
                        title: "سیرجان",
                    },
                    {
                        id: 3,
                        title: "رفسنجان",
                    },
                    {
                        id: 4,
                        title: "جیرفت",
                    },
                    {
                        id: 5,
                        title: "بم",
                    },
                ]
            },
        ],
    },
    {
        id: 4 ,
        title:"سایت",
        listItems: [
            {
                id: 1,
                title: "سایت 1",
                url: "/site/1",
            },
            {
                id: 2,
                title: "سایت 2",
                url: "/site/2",
            },
            {
                id: 3,
                title: "سایت 3",
                url: "/site/3",
            },
        ],
    },



]
