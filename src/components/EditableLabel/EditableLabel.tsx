import { useState, useRef, useEffect } from "react";
import { Typography, TextField, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

type EditableLabelProps = {
  value: string;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

export function EditableLabel({ value, onChange, sx }: EditableLabelProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const save = () => {
    if (draft.trim()) {
      onChange(draft.trim());
    } else {
      setDraft(value);
    }
    setEditing(false);
  };

  const cancel = () => {
    setDraft(value);
    setEditing(false);
  };

  return editing ? (
    <TextField
      inputRef={inputRef}
      value={draft}
      variant="standard"
      onChange={(e) => setDraft(e.target.value)}
      onBlur={save}
      onKeyDown={(e) => {
        if (e.key === "Enter") save();
        if (e.key === "Escape") cancel();
      }}
      sx={{
        fontWeight: 500,
        ...sx
      }}
    />
  ) : (
    <Typography
      variant="h6"
      sx={{
        cursor: "text",
        fontWeight: 500,
        "&:hover": { backgroundColor: "action.hover" },
        px: 0.5,
        borderRadius: 0.5,
        ...sx
      }}
      onClick={() => setEditing(true)}
    >
      {value}
    </Typography>
  );
}
