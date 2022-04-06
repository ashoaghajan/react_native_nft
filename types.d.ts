type BidItem = {
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
}

type NTFCardData = {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: BidItem[]
}    