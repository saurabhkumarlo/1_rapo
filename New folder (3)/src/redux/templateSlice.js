import { createSlice } from "@reduxjs/toolkit";
import Template1 from "Component/MainComponent/CreateSignature/AllTemplates/Template1";
const templateSlice = createSlice({
  name: "template",
  initialState: {
    Templates: Template1,
    allTemplates: [],
    templateCode: "",
    id: "",
    apiTemplate: [],
    singleTemplate: "",
  },
  reducers: {
    getTemplate: (state, action) => {
      state.Templates = action.payload;
    },
    getAllTemplates: (state, action) => {
      state.allTemplates = action.payload;
    },
    getTemplateCode: (state, action) => {
      state.templateCode = action.payload;
    },
    getTemplateId: (state, action) => {
      state.id = action.payload;
    },
    getTemplateFromApi: (state, action) => {
      state.apiTemplate = action.payload;
    },
    getSingleTemplate: (state, action) => {
      state.singleTemplate = action.payload;
    },
  },
});

export const {
  getTemplate,
  getAllTemplates,
  getTemplateCode,
  getTemplateId,
  getTemplateFromApi,
  getSingleTemplate,
} = templateSlice.actions;

export default templateSlice.reducer;
