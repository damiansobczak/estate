export interface OfferProps {
  id: number;
  image: string | null;
  price: string;
  category: string;
  date: string;
  title: string;
  tags: Array<string>;
}
