interface LocationOriginProps {
  name?: string;
  url?: string;
}

export interface ResponseProps {
  item: {
    created?: string;
    episode?: string[];
    gender?: string;
    id?: number;
    image?: string;
    location?: LocationOriginProps;
    name?: string;
    origin?: LocationOriginProps;
    species?: string;
    status?: string;
    type?: string;
    url?: string;
  };
}
