import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/*Components*/
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

const workData = [
  {
    href: "https://www.google.com",
    category: "fullstack",
    img: "/assets/work/thumb-1.png",
    title: "ETF Dashboard",
  },
  {
    href: "https://game-hub-five-tan.vercel.app/",
    category: "frontend",
    img: "/assets/work/game-hub-full.png",
    title: "Game Hub",
  },
  {
    href: "https://www.google.com",
    category: "fullstack",
    img: "/assets/work/thumb-3.png",
    title: "Issue Tracker",
  },
  {
    href: "https://www.google.com",
    category: "frontend",
    img: "/assets/work/thumb-4.png",
    title: "Game Hub",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState(3);

  //extract uniques categories from workData
  const uniqueCategories = workData.reduce((acc, current) => {
    if (!acc.includes(current.category)) {
      acc.push(current.category);
    }
    return acc;
  }, []);

  //tab data with "all" and "unique" categories
  const tabData = [{ category: "all" }, ...uniqueCategories.map((category) => ({ category }))];

  //filter workItems based on activeTab
  const filteredWorkData =
    activeTab === "all" ? workData : workData.filter((item) => item.category === activeTab);

  console.log("filtered", filteredWorkData);

  //handle load more button click
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 1);
  };

  return (
    <section className="pt-24 min-h-[800px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div
            className="flex flex-col xl:flex-row items-center xl:items-start 
          xl:justify-between mb-[30px]">
            <AnimatedText text="My Latest Work" textStyles="h2 mb-[30px] xl:mb-0" />
            {/*Tabs List*/}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.category}
                  className="capitalize w-[120px]"
                  onClick={() => setActiveTab(item.category)}>
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/*Tabs Content*/}
          <TabsContent value={activeTab} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filteredWorkData.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8">
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {/*Load More Button */}
              {visibleItems < filteredWorkData.length && (
                <div className="flex justify-center mt-12">
                  <button onClick={handleLoadMore} className="btn btn-accent ">
                    Load More
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
