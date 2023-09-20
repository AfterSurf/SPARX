import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./NameCard.css"

export const NameCard = ({element}) => { 
    const {name, phone} = element
    return (
        <div className='auto'>
            <Card sx={{ width: 200, margin: "2rem", backgroundColor: "brown" }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{phone}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}