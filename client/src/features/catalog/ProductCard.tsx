import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}
export default function ProductCard({ product }: Props) {
    return (
        <Card >

            <CardHeader
            avatar={
                <Avatar>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            />
            <CardMedia
                sx={{ height: 140 }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5" >
                   ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
} 