const posts = [
  {
    slug: 'heatmaps-sudamericano-2025',
    title: 'HeatMaps by Players, Teams, and Matchdays - First Phase CONMEBOL U20 2025',
    date: '2025-02-18',
    excerpt: 'Analysis of heatmaps generated during the first phase of the CONMEBOL U20 2025 tournament',
    coverImage: 'https://cdn.conmebol.com/wp-content/uploads/2024/10/sub202025.png',
    content: `# HeatMaps by Players, Teams, and Matchdays - First Phase CONMEBOL U20 2025

Modern football is increasingly influenced by data analysis and advanced visualizations, such as heatmaps. During the first phase of the CONMEBOL U20 2025 tournament, heatmaps have been a key tool for understanding how teams and players performed.

## What Do HeatMaps Reveal?

### 1. **Individual Playing Patterns**
Individual heatmaps help analyze each player's movement on the field. From full-backs constantly reaching the final third to midfielders controlling ball circulation. For example, Brazil's wingers have shown strong presence on the flanks, while Argentina's midfield has dominated in central areas.

### 2. **Team Comparisons**
Each team has exhibited different playing styles.

### 3. **Match-by-Match Evolution**
Heatmaps also help identify how strategies changed over the course of the matches. On the first matchday, many teams opted for high pressing, while by the third matchday, some adjusted their positioning to close spaces and secure qualification.

## Final Standings of the Group Stage

### **Group A**
1. **🇺🇾 Uruguay (9 pts, GD +8)**  
2. **🇵🇾 Paraguay (9 pts, GD -3)**  
3. **🇨🇱 Chile (6 pts, GD 0)**  
4. **🇻🇪 Venezuela (6 pts, GD +3)**  
5. **🇵🇪 Peru (0 pts, GD -8)**  

### **Group B**
1. **🇨🇴 Colombia (10 pts, GD +3)**  
2. **🇦🇷 Argentina (8 pts, GD +7)**  
3. **🇧🇷 Brazil (6 pts, GD -5)**  
4. **🇪🇨 Ecuador (4 pts, GD -1)**  
5. **🇧🇴 Bolivia (0 pts, GD -4)**  

## Match Heatmap Images

📅 **31/01/2025 16:30**  
🇵🇾 **Paraguay U20** 2 - 1 🇨🇱 **Chile U20**  
[View heatmap](https://felipeorma.github.io/imagenes_blog/heatmap_paraguay_chile_31_01_2025.jpg)

📅 **31/01/2025 16:30**  
🇻🇪 **Venezuela U20** 1 - 0 🇺🇾 **Uruguay U20**  
[View heatmap](https://felipeorma.github.io/imagenes_blog/heatmap_venezuela_uruguay_31_01_2025.jpg)

By Felipe Ormazabal.`
  },
  {
    slug: 'data-driven-sports',
    title: 'The Rise of Data-Driven Decision Making in Sports',
    date: '2024-03-21',
    excerpt: 'How data analytics is revolutionizing sports management and performance analysis',
    coverImage: 'https://media.licdn.com/dms/image/v2/C4E12AQGQHD4BHivb1w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1641818034525?e=2147483647&v=beta&t=jV_m6S4FGukp4uK-vT2yCcXyOct6lcDOOyk-cHziHTw',
    content: `# The Rise of Data-Driven Decision Making in Sports

In the modern era, data has become an essential tool in decision-making across various industries, and sports are no exception. From recruitment to performance analysis, injury prevention, and fan engagement, data-driven strategies are transforming how teams operate. Football, a traditionally intuition-based sport, is now deeply influenced by analytics, with clubs increasingly investing in advanced metrics to gain a competitive edge.

## The Influence of Data in Football

One of the most well-known cases of data-driven success in football is Toulouse FC in France. After being acquired by data-focused investment firm RedBird Capital, the club implemented an analytical approach that contributed to their promotion back to Ligue 1. By utilizing performance metrics and scouting algorithms, they identified undervalued players who fit their tactical philosophy, proving that data can be a game-changer in squad building.

Additionally, the rise of football managers with analytical backgrounds—many of whom started as passionate players of Football Manager—has shown the real-world impact of data literacy. Notable figures like Sam Gregory (Inter Miami), Victor Orta (formerly of Leeds United), and Matthew Benham (owner of Brentford FC) demonstrate how an analytical mindset can shape club strategies.

## Advanced Metrics and Their Applications

Football has embraced a range of advanced statistics that go beyond traditional metrics like goals and assists. Some key metrics include:

- **Expected Goals (xG)**: Measures the quality of a shot based on historical data, helping assess a player's finishing ability.
- **Expected Assists (xA)**: Evaluates the likelihood of a pass leading to a goal, reflecting playmaking skills.
- **Pressing Efficiency**: Quantifies how effectively a team or player pressures opponents.
- **Packing Rate**: Analyzes how many opposing players are bypassed with a pass or dribble, giving insights into a team's progression strategy.
- **Distance Covered & Sprint Data**: Used in physical conditioning and fitness management.

## Conclusion

Data-driven decision-making is no longer a luxury but a necessity in modern sports. Whether it's optimizing performance, preventing injuries, scouting talent, or engaging fans, analytics is reshaping football and other sports at every level. As technology advances, the role of data in sports will only continue to grow, making it an exciting time for both analysts and fans who want to see their favorite teams succeed through science and strategy.

By Felipe Ormazabal.`
  }
];

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}