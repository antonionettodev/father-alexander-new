import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-4 pt-4 md:pb-6 md:mt-8 lg:py-12">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Father Alexander
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          Sobre a fé e a vida cristã, as Sagradas Escrituras, a oração e os sacramentos, a vida do santos, teologia e escritos selecionados dos santos padres.
          </p>
          
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Acessar o blog
            </Link>
            <Link
              href={siteConfig.links.originalSite}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              Site Original
            </Link>
          </div>
          <img src="/banner.jpg" alt="banner" className="mx-auto max-w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] dark:filter dark:grayscale rounded-lg" />
        </div>
      </section>
      <section className="container max-w-4xl py-3 lg:py-6 flex flex-col space-y-6 mt-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          Últimos posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
