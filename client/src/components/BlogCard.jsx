import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BlogCard = ({ title, summary, image }) => {
  return (
    <Card className="shadow-md rounded-xl transition hover:scale-[1.02]">
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        className="object-cover"
      />
      <CardContent>
        <Typography variant="h6" className="font-bold text-secondary">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mt-2">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
