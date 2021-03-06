import React from "react";

import Field from "../components/field";
import { BlockControls } from "@wordpress/blocks";

const textField = {
  getBlockSettings(fieldConfig) {
    return {
      category: "common",
      icon: "text",
      title: "GCF Text",
      isPrivate: true,
      attributes: {
        content: {
          type: "string",
          source: "meta",
          meta: fieldConfig.name
        }
      },
      edit({ attributes, setAttributes }) {
        return (
          <Field label={fieldConfig.title || fieldConfig.name}>
            {id => (
              <input
                id={id}
                type="text"
                value={attributes.content || ""}
                onChange={event => {
                  setAttributes({ content: event.target.value });
                }}
                placeholder="Write"
              />
            )}
          </Field>
        );
      },
      save() {
        return null;
      }
    };
  }
};

export default textField;
