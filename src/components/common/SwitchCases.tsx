type SwitchCasesProps = {
  value: string;
  cases: {
    [key: string]: React.ReactNode;
  };
  fallbackCase?: React.ReactNode;
};

const SwitchCases = ({
  value,
  cases,
  fallbackCase = <>지원하지 않는 대상입니다.</>,
}: SwitchCasesProps) => {
  return cases[value] || fallbackCase;
};

export default SwitchCases;
