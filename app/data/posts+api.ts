import postsData from "@/assets/posts.json";

export function GET() {
  return Response.json([
    {
      id: "post1",
      title: "Exploring the Mountains",
      author: "Jane Doe",
      date: "2024-06-15",
      content:
        "<div><img src='https://dummyimage.com/640x360' alt='Mountains'><h2>Exploring the Mountains</h2><p>There is nothing quite like the serenity of the mountains. The crisp air, the stunning views, and the sense of adventure all contribute to an unforgettable experience.</p><p>In this blog post, I will share my recent trip to the Rocky Mountains, including the best hiking trails, breathtaking viewpoints, and tips for a successful adventure.</p></div>",
    },
    {
      id: "post2",
      title: "A Culinary Journey",
      author: "John Smith",
      date: "2024-06-18",
      content:
        "<div><img src='https://dummyimage.com/360x640' alt='Culinary Journey'><h2>A Culinary Journey</h2><p>Food is not just about sustenance; it's an experience, a journey through different cultures and traditions. In this post, we'll explore the diverse world of culinary delights.</p><p>Join me as I delve into the rich flavors of Thai cuisine, the comforting dishes of Italian kitchens, and the innovative creations of modern gastronomy.</p></div>",
    },
    {
      id: "post3",
      title: "The Future of Technology",
      author: "Alice Johnson",
      date: "2024-06-20",
      content:
        "<div><img src='https://dummyimage.com/640x360' alt='Technology'><h2>The Future of Technology</h2><p>Technology is evolving at a rapid pace, and it’s transforming the way we live, work, and interact with the world. From artificial intelligence to quantum computing, the future holds endless possibilities.</p><p>In this blog post, we'll explore the latest advancements in technology, their potential impact on society, and what the future might look like.</p></div>",
    },
    {
      id: "post4",
      title: "Traveling the World on a Budget",
      author: "Charlie Brown",
      date: "2024-06-25",
      content:
        "<div><img src='https://dummyimage.com/640x360' alt='Travel'><h2>Traveling the World on a Budget</h2><p>Traveling the world doesn't have to break the bank. With careful planning and smart choices, you can explore new destinations and create unforgettable memories without spending a fortune.</p><p>This post offers practical tips on budget travel, including finding affordable accommodation, saving on flights, and making the most of your travel experience.</p></div>",
    },
    {
      id: "post5",
      title: "Mindfulness and Mental Health",
      author: "Diana Prince",
      date: "2024-06-27",
      content:
        "<div><img src='https://dummyimage.com/640x360' alt='Mindfulness'><h2>Mindfulness and Mental Health</h2><p>Mental health is a crucial aspect of our overall well-being, and mindfulness can play a significant role in maintaining it. Practicing mindfulness helps reduce stress, improve focus, and enhance emotional resilience.</p><p>In this blog post, we'll explore the benefits of mindfulness, simple techniques to incorporate it into your daily routine, and resources to help you get started.</p></div>",
    },
  ]);
}
