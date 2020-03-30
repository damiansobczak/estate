export interface FaqProps {
    data: Array<{
        id: Number,
        title: {
            rendered: String
        },
        content: {
            rendered: String
        }
    }>;
}