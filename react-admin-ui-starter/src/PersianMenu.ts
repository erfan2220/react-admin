interface MenuItem {
    id: number;
    title: string;
    listItems: Array<{
        id: number;
        title: string;
        url?: string;
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
            {
                id: 10,
                title: "همدان",
                url: "/users/1",
            },
            {
                id: 11,
                title: "لرستان",
                url: "/",
            },
            {
                id: 12,
                title: "خراسان جنوبی",
                url: "/users/1",
            },
            {
                id: 13,
                title: "گیلان",
                url: "/users/1",
            },
            {
                id: 14,
                title: "مازندران",
                url: "/",
            },
            {
                id: 15,
                title: "همدان",
                url: "/users/1",
            },
            {
                id: 16,
                title: "همدان",
                url: "/users/1",
            },
            {
                id: 17,
                title: "لرستان",
                url: "/",
            },
            {
                id: 18,
                title: "خراسان جنوبی",
                url: "/users/1",
            },
            {
                id: 19,
                title: "گیلان",
                url: "/users/1",
            },
            {
                id: 20,
                title: "مازندران",
                url: "/",
            },
            {
                id: 21,
                title: "همدان",
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
        id: 4,
        title: "سایت",
        listItems: [
            {
                id: 1,
                title: "تهران",
                listItem: [
                    {
                        id: 1,
                        title: "سایت 1",
                    },
                    {
                        id: 2,
                        title: "سایت 2",
                    },
                    {
                        id: 3,
                        title: "سایت 3",
                    },
                ],
            },
        ],
    },
];