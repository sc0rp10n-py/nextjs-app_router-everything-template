import mongoose, { Schema } from "mongoose";

const sampleSchema = new Schema(
    {
        Samplename: {
            type: String,
            required: true,
        },
        accounts: {
            type: [Object],
            default: [{
                type: "",
                profile: {}
            }],
        },
        email: {
            type: String,
            default: "",
        },
        phoneNumber: {
            type: String,
            default: "",
        },
        verified: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const Sample = mongoose.models.Sample || mongoose.model("Sample", sampleSchema);

export default Sample;