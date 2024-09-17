import Image, { StaticImageData } from "next/image";

interface playerCardProps {
  cardImage: StaticImageData;
  cardTitle: string;
  cardDescription: string;
  cardPosition: boolean;
}

export function PlayerCard({
  cardImage,
  cardTitle,
  cardDescription,
  cardPosition,
}: playerCardProps) {
  return (
    <div className= "mb-5">
      <Image
        src={cardImage}
        alt="Game Character 1"
        width={150}
        height={150}
        className={
          (cardPosition ? "float-left" : "float-right") +
          " mr-2 rounded-lg shadow-lg"
        }
      />
      <div>
        <h3 className="font-bold text-xl">{cardTitle}</h3>
        <p className="text-gray-600 font-extralight">{cardDescription}</p>
      </div>
    </div>
  );
}
