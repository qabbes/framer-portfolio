import StatsItem from "./StatsItem";

/*TODO:Get numbers of commit for my account (GitHub API) */

const statsData = [
  {
    endCountNum: 4,
    endCountText: "+",
    text: "Yrs of Experience",
  },
  {
    endCountNum: 3,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 95,
    endCountText: "+",
    text: "Commits",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((stat, index) => {
        return (
          <StatsItem
            key={index}
            endCountNum={stat.endCountNum}
            endCountText={stat.endCountText}
            text={stat.text}
          />
        );
      })}
    </section>
  );
};

export default Stats;
