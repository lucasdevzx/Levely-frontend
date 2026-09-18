import {IconInnerTextImage} from "@/components/common/IconInnerTextImage/IconInnerTextImage.jsx";
import {Image, Info} from "lucide-react";
import {FileInput} from "@/components/common/FileInput/FileInput.jsx";
import {Input} from "@/components/common/Input/Input.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {useState} from "react";

export function WorkoutForm({ onWorkoutSubmit }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [workoutType, setWorkoutType] = useState('USER');
    const [orderIndex, setOrderIndex] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onWorkoutSubmit({ name, description, workoutType, orderIndex });
    }

    return (
        <>
            <div className={"flex flex-col w-full h-[30%] p-4 gap-1 mb-4 justify-center items-center rounded-lg component-background"}>
                <div className={"flex flex-row w-full h-fit  justify-start "}>
                    <div className={"flex flex-row w-fit h-fit"}>
                        <IconInnerTextImage icon={<Info size={18} color={"var(--color-primary)"} />} text={"Opcional"}  selected={false} />
                    </div>
                </div>
                <Image size={80} color={"var(--color-primary)"} />
                <FileInput
                    label=""
                    buttonText="Selecionar imagem"
                    accept="image/*"
                    text={""}
                    onChange={(file) => console.log("Arquivo escolhido:", file)}
                />
            </div>
            <form onSubmit={handleSubmit} className={"flex w-full gap-4 justify-start items-start"}>
                <div className={"flex flex-col gap-lg w-full h-full"}>
                    <div className={"flex flex-col gap-2 w-full h-full"}>
                        <p>Nome do exercício</p>
                        <Input
                            required={true}
                            type="text"
                            placeholder="ex: Supino inclinado"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={"flex flex-col gap-2 w-full h-full"}>
                        <p>Descrição</p>
                        <Input
                            required={true}
                            type="text"
                            placeholder="ex: Região do peito, ombros e tríceps"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button text={"Adicionar Exercício"} />
                </div>
            </form>
        </>
    )
}