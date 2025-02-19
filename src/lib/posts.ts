// Datos estáticos para los posts
const posts = [
  {
    slug: 'data-driven-sports',
    title: 'The Rise of Data-Driven Decision Making in Sports',
    date: '2024-03-21',
    excerpt: 'How data analytics is revolutionizing sports management and performance analysis',
    coverImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1940&fit=crop',
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

## Areas of Application

### Physical Conditioning & Injury Prevention

With GPS tracking and biomechanical analysis, clubs monitor player workload, sprinting intensity, and recovery times to prevent injuries. Teams like Liverpool and Bayern Munich use cutting-edge technology to optimize training loads and reduce injury risks.

### Scouting & Recruitment

Modern scouting relies heavily on data. Clubs use machine learning models to identify talent based on key performance indicators, ensuring more cost-effective transfers. Brentford FC and Brighton & Hove Albion are prime examples of clubs successfully using data to sign undervalued players and develop them into top-tier talents.

### Tactical Analysis

Coaches now integrate analytics into match preparation, using tools like video tracking, heat maps, and passing networks to refine game plans. Clubs such as Manchester City and RB Leipzig invest heavily in performance analysis to gain tactical advantages.

### Marketing & Fan Engagement

Data isn't just used on the field. Teams analyze fan behavior through social media engagement, ticket sales trends, and personalized content strategies. Clubs like Real Madrid and Manchester United leverage AI-driven insights to enhance fan experiences and maximize revenue streams.

## Conclusion

Data-driven decision-making is no longer a luxury but a necessity in modern sports. Whether it's optimizing performance, preventing injuries, scouting talent, or engaging fans, analytics is reshaping football and other sports at every level. As technology advances, the role of data in sports will only continue to grow, making it an exciting time for both analysts and fans who want to see their favorite teams succeed through science and strategy.`
  },
  {
    slug: 'analisis-tactico',
    title: 'Análisis Táctico: Evolución del Fútbol Moderno',
    date: '2024-03-20',
    excerpt: 'Un vistazo profundo a cómo ha evolucionado el fútbol táctico en la última década',
    coverImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&fit=crop',
    content: `# Análisis Táctico: Evolución del Fútbol Moderno

El fútbol moderno ha experimentado cambios significativos en la última década. Los equipos ahora adoptan enfoques más fluidos y dinámicos, alejándose de las formaciones rígidas tradicionales.

## Principales Tendencias

1. Pressing alto
2. Construcción desde atrás
3. Falsos nueves
4. Laterales invertidos

La evolución táctica continúa, y los analistas de datos juegan un papel crucial en esta transformación.`
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