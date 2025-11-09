import { useState, type ComponentProps } from "react";
import { tv } from "tailwind-variants";
import ImagePreview from "../../../components/image-preview";
import InputCheckbox from "../../../components/input-checkbox";

export const photoImageSelecttableVariants = tv({
  base: 'cursor-pointer relative rounded-lg',
  variants: {
    select: {
      true: 'outline-2 outline-accent-brand',
    }
  }
});

interface PhotoImageSelectableProps extends ComponentProps<typeof ImagePreview> {
  selected?: boolean;
  onSelectedImage?: (selected: boolean) => void;
}

export default function PhotoImageSelectable({
  className,
  selected,
  onSelectedImage,
  ...props
}: PhotoImageSelectableProps) {
  const [isSelected, setIsSelected] = useState(selected);

  function handleSelect() {
    const newValue = !isSelected;

    setIsSelected(newValue);
    onSelectedImage?.(newValue);
  }

  return (
    <label
      className={photoImageSelecttableVariants({ select: isSelected, className })}
    >
      <InputCheckbox
        size="sm"
        defaultChecked={isSelected}
        onChange={handleSelect}
        className="absolute top-1 left-1"
      />
      <ImagePreview {...props} />
    </label>
  );
}