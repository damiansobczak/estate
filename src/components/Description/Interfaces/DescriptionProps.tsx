export interface DescriptionProps {
  details: {
    id: Number,
    title: String,
    subtitle?: String,
    text: String,
    cords?: {
      x: String, y: String
    }
    image?: String | null,
    alt?: String,
    address: String,
    rent?: String,
    media?: String,
    assets?: Object,
    background?: String | null,
    price: String,
    category?: String,
    date?: String,
    tags?: Array<String>
  };
}
