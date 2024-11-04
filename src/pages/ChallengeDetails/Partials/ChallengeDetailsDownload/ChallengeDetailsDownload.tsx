import { Button } from '../../../../components/common';
import { IResource } from '../../../../types/response/detailChallenge';
import BoxContent from '../BoxContent';
import './challengeDetailsDownload.scss';

interface DownloadButtonProps {
  resource: IResource;
}
const ChallengeDetailsDownload: React.FC<DownloadButtonProps> = ({
  resource,
}) => {
  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    console.log('name: ' + name);
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };
  console.log('resource', resource);
  return (
    <div className="challenge__details-download-tab">
      <BoxContent
        title="🗂️ Download based files"
        className="download__based-files"
      >
        <p>
          Includes assets, JPG images of the design files, and a basic style
          guide. There’s also a README to help you get started.
        </p>

        <Button
          label="Download starter"
          styleType="primary"
          buttonSize="normal"
          onClick={() =>
            handleDownload(resource.assetsUrl, resource.assetsName)
          }
        />
      </BoxContent>
      <BoxContent
        title="📑 Download design file"
        className="download__design-file"
      >
        <p>
          All of our designs are available as Figma files. Using the design file
          will help you build more accurate solutions.
        </p>

        <Button
          label="Download design"
          styleType="primary"
          buttonSize="normal"
          onClick={() => handleDownload(resource.figmaUrl, resource.figmaName)}
        />
      </BoxContent>
    </div>
  );
};

export default ChallengeDetailsDownload;
