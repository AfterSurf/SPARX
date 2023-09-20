import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export const NameCard = ({element}) => { 
    const {name, phone} = element
    return (

            <Card sx={{ width: 275, margin: "2rem", backgroundColor: "brown" }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{phone}</Typography>
                </CardContent>
            </Card>
    )
}