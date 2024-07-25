import { Profissional } from "@barba/core";
import { useProfissionais } from "@barba/ui";
import Image from "next/image";

export interface ProfissionalInputProps {
  profissional: Profissional | null;
  profissionalMudou: (profissional: Profissional) => void;
}

function Opcao(props: {
  profissional: Profissional;
  onClick: (p: Profissional) => void;
  selecionado?: boolean;
}) {
  return (
    <div
      className={`flex h-[180px] w-[150px] cursor-pointer select-none flex-col items-center rounded-lg border ${props.selecionado ? "border-green-400" : "border-zinc-700"} overflow-hidden`}
      onClick={() => props.onClick(props.profissional)}
    >
      <Image
        src={props.profissional.imagemURL}
        alt={props.profissional.nome}
        width={150}
        height={150}
      />
      <div
        className={`h-full w-full py-2 text-center text-xs ${props.selecionado ? "bg-green-400 font-semibold text-black" : "bg-zinc-900 font-light text-zinc-400"} `}
      >
        {props.profissional.nome.split(" ")[0]}
      </div>
    </div>
  );
}

export default function ProfissionalInput(props: ProfissionalInputProps) {
  const { profissionais } = useProfissionais();

  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">
        Profissionais Disponíveis
      </span>
      <div className="grid grid-cols-2 gap-5 self-start md:grid-cols-3">
        {profissionais.map((profissional) => (
          <Opcao
            key={profissional.id}
            profissional={profissional}
            onClick={props.profissionalMudou}
            selecionado={profissional.id === props.profissional?.id}
          />
        ))}
      </div>
    </div>
  );
}
