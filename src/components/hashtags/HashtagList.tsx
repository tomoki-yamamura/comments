import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectedCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectedCompany,
}: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          onSelectCompany={handleSelectedCompany}
          company={company}
        />
      ))}
    </ul>
  );
}
